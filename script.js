const carduri = document.querySelectorAll("card")
const nextElement = document.querySelector("#next")
const prevElement = document.querySelector("#prev")


const next = () => {
    const current = document.querySelector(".current")
    current.classList.remove("current");
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add("current")
    }
    else{
        carduri[0].classList.add('current');
    }
}
const prev = () => {
    const current = document.querySelector(".current")
    current.classList.remove("current");
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add("current")
    }
    else{
        carduri[carduri.length-1].classList.add('current');
    }
}

nextElement.addEventListener("click", () =>{
    next()
    // setInterval( next, 5000);
})

prevElement.addEventListener("click", () =>{
    prev()
    // setInterval( previous, 5000);
})