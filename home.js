// NAV BAR
gsap.registerPlugin(ScrollTrigger)
gsap.from(".nav-link", {
    delay: 0.3,
    duration: 1,
    // y: "-200px",
    opacity: 0,
    stagger: 0.2,
    ease: "power4.out"
})

// gsap.from(".logo", {
//     duration: 1.5,
//     y: "-300px",
//     ease: "bounce.out"
// })

// SLOGAN
gsap.from(".slogan-img", {
    delay: 3,
    duration: 1,
    opacity: 0,
    ease: "power4.out",
})

gsap.from(".slogan-img", {
    delay: 4,
    duration: .8,
    y: "5px",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
})

gsap.from(".slogan-text", {
    delay: 2,
    duration: 1,
    x: "800px"
})

gsap.from(".sub-slogan", {
    delay: 2.2,
    duration: 1,
    x: "800px"
})

gsap.from(".order-now", {
    delay: 2.4,
    duration: 1,
    x: "800px"
})

const swiper = new Swiper('.js-review-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: ".js-review-pagination",
        clickable: true
    },
    breakpoints: {
        767:{
            slidesPerView: 2
        }
    }
});