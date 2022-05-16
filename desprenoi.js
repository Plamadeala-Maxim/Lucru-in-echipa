//NR-1//
const slideOne = document.querySelector(".slide-one");
const slideTwo = document.querySelector(".slide-two");
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".previous-btn");
nextBtn.addEventListener("click", () =>{
    slideOne.style.display = "none";
    slideTwo.style.display = "flex";
});
previousBtn.addEventListener("click", () =>{
    slideOne.style.display = "flex";
    slideTwo.style.display = "none";
});
//NR-3//
const footerSlideOne = document.querySelector(".services-slide-one");
const footerSlideTwo = document.querySelector(".services-slide-two");
const btnFooterOne = document.querySelector(".btn-footer-one")
const btnFooterTwo = document.querySelector(".btn-footer-two")

btnFooterOne.addEventListener("click", () =>{
    footerSlideOne.style.display = "none"
    footerSlideTwo.style.display = "flex"
    btnFooterOne.style.display = "none"
    btnFooterTwo.style.display = "flex"
})
btnFooterTwo.addEventListener("click", ()=>{
    footerSlideOne.style.display = "flex";
    footerSlideTwo.style.display = "none";
})
