gsap.to(".card", {
    opacity: 1,
    scale: 1,
    duration: 1, // seconds
    atComplete: () => {
        gsap.to(".card", {
            y: -20,
            duration: 0.5,
            repeat: -1, // This mean that this will be reapated indefinitely
            yoyo: true,
        })
    },
});