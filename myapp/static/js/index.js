console.log("Loaded....")


function loco() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);

  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
   
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });





 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


  ScrollTrigger.refresh();

}


loco()



Shery.mouseFollower();
Shery.makeMagnet(".donate");
Shery.makeMagnet(".heading",{
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.textAnimate(".content_container h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});



let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let navbar = document.querySelector(".navbar")
let header = document.querySelector(".header")
console.log(header)

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor,{
    x:dets.clientX,
    y:dets.clientY,
    duration:.2,
    ease:Expo,
  })

})

navbar.addEventListener("mousemove",(dets)=>{
  gsap.to(cursor,{
    scale:6
  })
})
navbar.addEventListener("mouseleave",(dets)=>{
  gsap.to(cursor,{
    scale:1
  })
})





const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});











// var tl = gsap.timeline({

//   scrollTrigger: {
//     trigger: ".page2",
//     scroller: "#main",
//     markers: true,
//     scrub: 3,
//     duration:2,
//     pin:true,
//     start:"38% 50%",
//     end:"100% 100%"
//   }
// })

gsap.from(".logo,.navbar ul li,.donate", {
  y: -100,
  opacity: 0,
  duration: 2,

})






var tl = gsap.timeline()


gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 1,
  duration: 1
})


tl.to(".subpage",{
  width:"100%",
  height:"100vh",
  scrollTrigger:{
    trigger:".subpage",
    scroller:"#main",
    markers:true,
    scrub:3,
    start:"top 100%",
    end:"top 130%"
  }


})


// tl.to(".page4",{
//   backgroundColor:"#0F0D0D",
//   color:"white",
//   duration:2,
//   scrollTrigger:{
//     trigger:".page4",
//     scroller:"#main",
//     markers:true,
//     scrub:3,
//     start:"top 90%",
//     end:"top 100%"
//   }
// })

let boxes = document.querySelectorAll(".box")

boxes.forEach((elem)=>{
  elem.addEventListener("mouseenter",()=>{
    let at = elem.getAttribute("data-image")
    cursor.style.width = "300px"
    cursor.style.height = "300px"
    // cursor.style.borderRadius = "0"
    cursor.style.backgroundImage = `url(${at})`
  })
  elem.addEventListener("mouseleave",()=>{
    let at = elem.getAttribute("data-image")
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    // cursor.style.borderRadius = "50%"
    cursor.style.backgroundImage = `none`
  })
})
