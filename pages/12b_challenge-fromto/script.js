import gsap from "gsap";

const emojis = document.querySelectorAll(".reactions button");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


emojis.forEach((emoji) => {
    emoji.addEventListener("click", () => {

        const clone = emoji.cloneNode(true);

        const rect = emoji.getBoundingClientRect();

        clone.style.position = "fixed";
        clone.style.left = rect.left + "px";
        clone.style.top = rect.top + "px";
        clone.style.pointerEvents = "none";

        document.body.appendChild(clone);

        const animation = gsap.fromTo(clone, {
            x: getRandomIntInclusive(5, 10),
        }, {
            y: -150,
            x: getRandomIntInclusive(-20, 20),
            scale: 2.5,
            rotate: getRandomIntInclusive(-40, 40),
            duration: 0.5,
            paused:true,
            opacity: 0,
            ease:"power2.out",
            onComplete: (() => {clone.remove()})
        })

    
        animation.restart()
    })
})

