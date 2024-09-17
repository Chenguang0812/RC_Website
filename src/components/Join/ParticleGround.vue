// ParticleBackground.vue
<template>
  <div ref="particlesContainer" class="particles-container"></div>
</template>

<script>
export default {
  name: "ParticleBackground",
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultOptions: {
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: "center",
        directionY: "center",
        density: 20000,
        dotColor: "#666666",
        lineColor: "#666666",
        particleRadius: 7,
        lineWidth: 1,
        curvedLines: false,
        proximity: 100,
        parallax: false,
        parallaxMultiplier: 5,
      },
      canvas: null,
      ctx: null,
      particles: [],
      raf: null,
      mouseX: 0,
      mouseY: 0,
      winW: 0,
      winH: 0,
      desktop: !navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
      ),
      orientationSupport: !!window.DeviceOrientationEvent,
      tiltX: 0,
      pointerX: 0,
      pointerY: 0,
      tiltY: 0,
      paused: false,
    };
  },
  computed: {
    mergedOptions() {
      return { ...this.defaultOptions, ...this.options };
    },
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
    this.destroy();
  },
  methods: {
    init() {
      this.createCanvas();
      this.createParticles();
      this.bindEvents();
      this.draw();
    },
    createCanvas() {
      this.canvas = document.createElement("canvas");
      this.canvas.className = "pg-canvas";
      this.canvas.style.display = "block";
      this.$refs.particlesContainer.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");
      this.styleCanvas();
    },
    styleCanvas() {
      this.canvas.width = this.$refs.particlesContainer.offsetWidth;
      this.canvas.height = this.$refs.particlesContainer.offsetHeight;
      this.ctx.fillStyle = this.mergedOptions.dotColor;
      this.ctx.strokeStyle = this.mergedOptions.lineColor;
      this.ctx.lineWidth = this.mergedOptions.lineWidth;
    },
    createParticles() {
      const numParticles = Math.round(
        (this.canvas.width * this.canvas.height) / this.mergedOptions.density
      );
      for (let i = 0; i < numParticles; i++) {
        const p = new Particle(this);
        p.setStackPos(i);
        this.particles.push(p);
      }
    },
    bindEvents() {
      window.addEventListener("resize", this.resizeHandler);
      document.addEventListener("mousemove", this.mousemoveHandler);
      if (this.orientationSupport && !this.desktop) {
        window.addEventListener("deviceorientation", this.orientationHandler);
      }
    },
    draw() {
      this.winW = window.innerWidth;
      this.winH = window.innerHeight;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].updatePosition();
      }
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].draw();
      }

      if (!this.paused) {
        this.raf = requestAnimationFrame(this.draw);
      }
    },
    resizeHandler() {
      this.styleCanvas();
      const elWidth = this.$refs.particlesContainer.offsetWidth;
      const elHeight = this.$refs.particlesContainer.offsetHeight;

      this.particles = this.particles.filter(
        (p) => p.position.x <= elWidth && p.position.y <= elHeight
      );

      const numParticles = Math.round(
        (this.canvas.width * this.canvas.height) / this.mergedOptions.density
      );
      let particlesToAdd = numParticles - this.particles.length;

      if (particlesToAdd > 0) {
        while (particlesToAdd--) {
          const p = new Particle(this);
          this.particles.push(p);
        }
      } else if (particlesToAdd < 0) {
        this.particles.splice(numParticles);
      }

      for (let i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].setStackPos(i);
      }
    },
    mousemoveHandler(e) {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY;
    },
    orientationHandler(e) {
      this.tiltY = Math.min(Math.max(-e.beta, -30), 30);
      this.tiltX = Math.min(Math.max(-e.gamma, -30), 30);
    },
    destroy() {
      this.canvas.parentNode.removeChild(this.canvas);
      window.removeEventListener("resize", this.resizeHandler);
      document.removeEventListener("mousemove", this.mousemoveHandler);
      window.removeEventListener("deviceorientation", this.orientationHandler);
      cancelAnimationFrame(this.raf);
    },
    pause() {
      this.paused = true;
    },
    start() {
      this.paused = false;
      this.draw();
    },
  },
};

class Particle {
  constructor(parent) {
    this.parent = parent;
    this.stackPos;
    this.active = true;
    this.layer = Math.ceil(Math.random() * 3);
    this.parallaxOffsetX = 0;
    this.parallaxOffsetY = 0;
    this.position = {
      x: Math.ceil(Math.random() * parent.canvas.width),
      y: Math.ceil(Math.random() * parent.canvas.height),
    };
    this.speed = {};
    this.setSpeed(parent.mergedOptions);
  }

  setSpeed(options) {
    if (options.directionX === "left") {
      this.speed.x = +(
        -options.maxSpeedX +
        Math.random() * options.maxSpeedX -
        options.minSpeedX
      ).toFixed(2);
    } else if (options.directionX === "right") {
      this.speed.x = +(Math.random() * options.maxSpeedX + options.minSpeedX).toFixed(2);
    } else {
      this.speed.x = +(
        -options.maxSpeedX / 2 +
        Math.random() * options.maxSpeedX
      ).toFixed(2);
      this.speed.x += this.speed.x > 0 ? options.minSpeedX : -options.minSpeedX;
    }

    if (options.directionY === "up") {
      this.speed.y = +(
        -options.maxSpeedY +
        Math.random() * options.maxSpeedY -
        options.minSpeedY
      ).toFixed(2);
    } else if (options.directionY === "down") {
      this.speed.y = +(Math.random() * options.maxSpeedY + options.minSpeedY).toFixed(2);
    } else {
      this.speed.y = +(
        -options.maxSpeedY / 2 +
        Math.random() * options.maxSpeedY
      ).toFixed(2);
      this.speed.y += this.speed.y > 0 ? options.minSpeedY : -options.minSpeedY;
    }
  }

  draw() {
    const ctx = this.parent.ctx;
    const options = this.parent.mergedOptions;

    ctx.beginPath();
    ctx.arc(
      this.position.x + this.parallaxOffsetX,
      this.position.y + this.parallaxOffsetY,
      options.particleRadius / 2,
      0,
      Math.PI * 2,
      true
    );
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    for (let i = this.parent.particles.length - 1; i > this.stackPos; i--) {
      const p2 = this.parent.particles[i];
      const a = this.position.x - p2.position.x;
      const b = this.position.y - p2.position.y;
      const dist = Math.sqrt(a * a + b * b).toFixed(2);

      if (dist < options.proximity) {
        ctx.moveTo(
          this.position.x + this.parallaxOffsetX,
          this.position.y + this.parallaxOffsetY
        );
        if (options.curvedLines) {
          ctx.quadraticCurveTo(
            Math.max(p2.position.x, p2.position.x),
            Math.min(p2.position.y, p2.position.y),
            p2.position.x + p2.parallaxOffsetX,
            p2.position.y + p2.parallaxOffsetY
          );
        } else {
          ctx.lineTo(
            p2.position.x + p2.parallaxOffsetX,
            p2.position.y + p2.parallaxOffsetY
          );
        }
      }
      if (!this.paused) {
        setTimeout(() => {
          this.raf = requestAnimationFrame(this.draw);
        }, 1000 / 30); // 設置每秒 30 幀
      }
    }
    ctx.stroke();
    ctx.closePath();
  }

  updatePosition() {
    const options = this.parent.mergedOptions;
    const parent = this.parent;

    if (options.parallax) {
      if (parent.orientationSupport && !parent.desktop) {
        const ratioX = (parent.winW - 0) / (30 - -30);
        const ratioY = (parent.winH - 0) / (30 - -30);
        const pointerX = (parent.tiltX - -30) * ratioX + 0;
        const pointerY = (parent.tiltY - -30) * ratioY + 0;
        parent.pointerX = pointerX;
        parent.pointerY = pointerY;
      } else {
        parent.pointerX = parent.mouseX;
        parent.pointerY = parent.mouseY;
      }
      this.parallaxTargX =
        (parent.pointerX - parent.winW / 2) / (options.parallaxMultiplier * this.layer);
      this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10;
      this.parallaxTargY =
        (parent.pointerY - parent.winH / 2) / (options.parallaxMultiplier * this.layer);
      this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10;
    }

    switch (options.directionX) {
      case "left":
        if (this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
          this.position.x = parent.canvas.width - this.parallaxOffsetX;
        }
        break;
      case "right":
        if (this.position.x + this.speed.x + this.parallaxOffsetX > parent.canvas.width) {
          this.position.x = 0 - this.parallaxOffsetX;
        }
        break;
      default:
        if (
          this.position.x + this.speed.x + this.parallaxOffsetX > parent.canvas.width ||
          this.position.x + this.speed.x + this.parallaxOffsetX < 0
        ) {
          this.speed.x = -this.speed.x;
        }
        break;
    }

    switch (options.directionY) {
      case "up":
        if (this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
          this.position.y = parent.canvas.height - this.parallaxOffsetY;
        }
        break;
      case "down":
        if (
          this.position.y + this.speed.y + this.parallaxOffsetY >
          parent.canvas.height
        ) {
          this.position.y = 0 - this.parallaxOffsetY;
        }
        break;
      default:
        if (
          this.position.y + this.speed.y + this.parallaxOffsetY > parent.canvas.height ||
          this.position.y + this.speed.y + this.parallaxOffsetY < 0
        ) {
          this.speed.y = -this.speed.y;
        }
        break;
    }

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

  setStackPos(i) {
    this.stackPos = i;
  }
}
</script>

<style scoped>
.particles-container {
  width: 100vw; /* 使用視窗的全寬 */
  height: 175vh; /* 使用視窗的全高 */
  overflow: hidden;
  position: absolute; /* 保持背景效果 */
  top: 0;
  left: 0;
}
</style>
