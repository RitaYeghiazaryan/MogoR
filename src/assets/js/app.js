// // Slider
// $("[data-slider]").slick({
//     infinite: true,
//     fade:true,
//     slidesToShow: 1,
//     slidesToScroll: 1
// });
// });




document.addEventListener("DOMContentLoaded", function () {
    //Fixed Header
    const header = document.querySelector("header")
    const introBlockHeight = document.getElementById("intro").scrollHeight;
    window.addEventListener("scroll", function () {
        let windowHeight = window.scrollY
        if (windowHeight >= (introBlockHeight)) {
            header.classList.add("fixed")
        } else {
            header.classList.remove("fixed")
        }

    })

    //  Menu nav toggle
    const burgerMenu = document.querySelector("button")
    const nav = document.querySelector("#nav")

    burgerMenu.addEventListener("click", function () {
        burgerMenu.classList.toggle("active")
        nav.classList.toggle("active")
        burgerMenu.classList.add("nav-toggle")
    })
    //Scroll
    const links = document.querySelectorAll("[data-scroll]")
    links.forEach(link => link.addEventListener("click", function (event) {
        const blockId = event.target.getAttribute(["data-scroll"]).substr(1)

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: "start"
        })
        setTimeout(() => window.location.hash = blockId, 500)
    }))
    // Accardion item click
    const accardionTitle = document.querySelectorAll(".acordion__title")
    accardionTitle.forEach((item) => {
        item.addEventListener("click", function () {
            const itemSibling = item.parentElement.nextElementSibling
            item.parentElement.style.setProperty("--transform", "translateY(-50%) rotate(135deg)");
            if (itemSibling.classList.toggle("show")) {
                item.parentElement.style.setProperty("--transform", "translateY(-50%) rotate(320deg)");
            }
        })
    })

    // Slider
    const slider=document.querySelectorAll(".reviews__item")
    const prev=document.querySelectorAll(".reviews__btn--prev")
    const next=document.querySelectorAll(".reviews__btn--next")
    const sliderWrapper=document.querySelector(".sliderWrapper")
    console.log(sliderWrapper);
    console.log(slider.length);
    // sliderWrapper.style.display="flex";


    function slideArr(...args){
       args.forEach(item=>item.forEach((arr,i)=>{


           console.log(arr);
           arr.setAttribute('data-slide-to', i + 1);
       }))
    }
    slideArr(prev,next)

//    const width= window.getComputedStyle(slider).width
//    console.log(width);

    for(let i=0;i<prev.length;i++){
        prev[i].setAttribute("data-slide-to",i+1)
    }

    // prev.forEach((item,e)=>{
    //     item.addEventListener("click",function(i){
    //         e.preventDefault();
    //         item.setAttribute('data-slide-to',i+1)
    //         console.log("123");

    //     })
    // })

})