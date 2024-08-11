// src/directives/scrollAnimation.js

export const scrollAnimation = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('animate')
          } else {
            el.classList.remove('animate')
          }
        })
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
  },
}
