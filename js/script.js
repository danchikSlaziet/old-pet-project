window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create ({
  wrapper: '.wrapper',
  content: '.container'
})

const burgerButton = document.querySelector('.hamb');
const navMenu = document.querySelector('.nav');

burgerButton.addEventListener('click', () => {
  navMenu.classList.toggle('nav_active');
  burgerButton.classList.toggle('active');
});