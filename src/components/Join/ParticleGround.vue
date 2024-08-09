<template>
    <div class="particle-ground" ref="particleGround"></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        particles: [],
        mouse: { x: null, y: null },
        canvas: null,
        ctx: null,
        animationFrameId: null
      }
    },
    mounted() {
      this.initParticles()
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize)
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId)
      }
    },
    methods: {
      initParticles() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.$refs.particleGround.appendChild(this.canvas)
        this.handleResize()
  
        const particleCount = 200  // 增加粒子的数量
        for (let i = 0; i < particleCount; i++) {
          this.particles.push({
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            radius: Math.random() * 3 + 2, // 增大粒子的半径
            dx: (Math.random() - 0.5) * 1, // 增加粒子的速度
            dy: (Math.random() - 0.5) * 1,
            color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.9)` // 增加颜色的不透明度
          })
        }
  
        this.$refs.particleGround.addEventListener('mousemove', this.handleMouseMove)
        this.$refs.particleGround.addEventListener('mouseleave', this.handleMouseLeave)
  
        this.animate()
      },
      animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  
        this.particles.forEach(particle => {
          if (this.mouse.x && this.mouse.y) {
            const dx = this.mouse.x - particle.x
            const dy = this.mouse.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 150) { // 增加鼠标影响范围
              particle.x += dx * 0.05 // 增加粒子响应的速度
              particle.y += dy * 0.05
            }
          }
  
          particle.x += particle.dx
          particle.y += particle.dy
  
          if (particle.x < 0 || particle.x > this.canvas.width) particle.dx = -particle.dx
          if (particle.y < 0 || particle.y > this.canvas.height) particle.dy = -particle.dy
  
          this.ctx.beginPath()
          this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          this.ctx.fillStyle = particle.color
          this.ctx.fill()
        })
  
        this.ctx.beginPath()
        for (let i = 0; i < this.particles.length; i++) {
          for (let j = i + 1; j < this.particles.length; j++) {
            const dx = this.particles[i].x - this.particles[j].x
            const dy = this.particles[i].y - this.particles[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)
  
            if (distance < 150) { // 增加粒子之间连线的最大距离
              this.ctx.moveTo(this.particles[i].x, this.particles[i].y)
              this.ctx.lineTo(this.particles[j].x, this.particles[j].y)
            }
          }
        }
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)' // 加粗粒子连线并增加不透明度
        this.ctx.lineWidth = 1.5
        this.ctx.stroke()
  
        this.animationFrameId = requestAnimationFrame(this.animate)
      },
      handleResize() {
        this.canvas.width = this.$refs.particleGround.clientWidth
        this.canvas.height = this.$refs.particleGround.clientHeight
      },
      handleMouseMove(event) {
        const rect = this.canvas.getBoundingClientRect()
        this.mouse.x = event.clientX - rect.left
        this.mouse.y = event.clientY - rect.top
      },
      handleMouseLeave() {
        this.mouse.x = null
        this.mouse.y = null
      }
    }
  }
  </script>
  
  <style scoped>
  .particle-ground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }
  </style>
  