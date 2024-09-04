document.addEventListener("DOMContentLoaded", (event) => {

    let button = document.querySelector(".layout__menu-togle")
    let icomBars = document.querySelector(".layout__menu-togle fa-bars")
    let icomXmark = document.querySelector(".layout__menu-togle fa-xmark")
    let aside = document.querySelector(".layout__aside")

    button.addEventListener("click", (event) => {

        let visible = document.querySelector(".layout__aside--visible")

        if(!visible){
            aside.classList.add("layout__aside--visible")
            icomBars.style.opacity = 0
            icomXmark.style.opacity = 1
        }else{
            aside.classList.remove("layout__aside--visible")
            icomBars.style.opacity = 1
            icomXmark.style.opacity = 0
        }

    })

    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth)

        if(size <= 1060){
            aside.classList.remove("layout__aside--visible")
            icomBars.style.opacity = 1
            icomXmark.style.opacity = 0
        }
    })

})