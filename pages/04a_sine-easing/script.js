import gsap from "gsap";


const button = document.querySelector('.scroll-to-top');


const idleBounce = gsap.to(button, {
    ease: "sine.out",
    y: -8,
    yoyo: true,
    repeat: -1,
    duration: 1,
    paused: true,   // <---- chatgpt
})


window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        button.classList.add("show"),
        idleBounce.play();
    } else {
        button.classList.remove("show");
        idleBounce.pause();
        idleBounce.progress(0);
    }
})

button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior:"smooth"});
})

button.addEventListener("mouseenter", () => {
    gsap.to(button, {scale: 1.1, duration: 0.2})
})

button.addEventListener("mouseleave", () => {
    gsap.to(button, {scale: 1, duration: 0.2})
})




