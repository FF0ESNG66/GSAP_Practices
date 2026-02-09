import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row")


const updateIndicator = (target) => {
    const tabBounds = target.getBoundingClientRect(); //  With this method we get the dimesions of the element, width, height, left, right, top, bottom, etc
    const rowBounds = tabRow.getBoundingClientRect();

    console.log("This is tabBounds:", tabBounds)
    console.log("This is rowBounds:", rowBounds)

    const width = tabBounds.width;
    const offset = tabBounds.left - rowBounds.left

    gsap.to(indicator, {
        x: offset,
        width: width,
        duration: 0.4,
        ease: 'back.out(1.7)',
    })

}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => { t.classList.remove("active"); });
        tab.classList.add("active");
        updateIndicator(tab)
    })
});

updateIndicator(document.querySelector(".tab.active")); 
// This is because at the moment of loading the page the indicator will adapt its width no matter the size of the first element