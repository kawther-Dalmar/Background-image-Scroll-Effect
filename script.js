const bgImageEl = document.getElementById("bg-image")

window.addEventListener("scroll",()=>{
    updatebgImage()
})

function updatebgImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset/ 900;
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset /12 + "%";
}