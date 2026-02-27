import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
    gsap.fromTo(bar, {
        scaleY: 0.4,  // from
        // transformOrigin: "bottom center"
    }, {
        scaleY: 1.6,  // to
        duration: 0.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.1
    })
}) 