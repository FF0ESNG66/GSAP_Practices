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

        gsap.to(".card", {
            boxShadow: "0 5px 90px 10px rgba(29, 209, 161, 0.6)",
            repeat: -1,
            yoyo: true,
            duration: 1,
            delay: 0.05,
        });
    },
});