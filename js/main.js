const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const parentNode = document.getElementById("navigationNode");
slide1.addEventListener("click", () => {
    //console.log("Clicked!")
    let img = slide1.querySelector(".bgImg");
    let parent = document.querySelector(".navigation");
    parent.setAttribute("style", "opacity:1")
    img.classList.add("scale");
});

navigationNode.addEventListener("click", () => {
    //console.log("Clicked!")
    let parentNode = navigationNode.querySelector(".hide");
    parentNode.className = "show";
    //slide1.classList.add("hideslide hide");
    slide1.className = "slide1 hideslide";
    slide1.setAttribute("style", "position:absolute")
    slide2.className = "showslide";
})