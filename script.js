var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove" , (dets) => {
    // console.log(dets.x,dets.y);
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";

})

document.addEventListener("mousemove",(dets)=>{
    blur.style.top = dets.y - 200 +"px";
    blur.style.left = dets.x -200 +"px";
})

gsap.to("#nav",{
    backgroundColor:"black",
    // duration:0.5,
    // delay:1
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        // scrub:true
        scrub:2
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:true
    }
    
})


