// gsap.from("#box1",{
//     scale:0,
//     duration:5,
//     rotate:720,
// })
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// })

var tl= gsap.timeline();

tl.from("#port",{
    opacity:0,
    y:-10,
    duration:0.5,
    delay:1,
    stagger:1  
})
tl.from("#p2",{
    opacity:0,
    y:-10,
    duration:0.5,
    delay:0.2,
    stagger:1  
})
tl.from("#page1 h1",{
    opacity:0,
    x:-100,
    duration:0.2,
    delay:0.2,
    stagger:1 
})
tl.from("#im img",{
    opacity:0,
    x:-955,
    stagger:1 
})
gsap.to("#page2 h1",{
    transform: "translateX(-200%)",
    scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    marker:true,                        
    start:"top 0%",
    end:"top -100%",
         scrub:2,
         pin:true
 }
})

gsap.to("#page3 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        //  marker:true,                        
         start:"top 0%",
         end:"top -100%",
         scrub:5,
         pin:true
 }
})
// gsap.from("#box3",{
//     scale:0,
//     duration:5,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"box3",
//         scroller:"body",
//         marker:true,
//         start:"top 40%",
//         scrub:5
//     }
// })
gsap.from("#box4",{
    scale:0,
    duration:5,
    rotate:720,
    scrollTrigger:{
        trigger:"box4",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        scrub:4
    }
})