gsap.to(".contant",{

  scrollTrigger:{
      trigger:".contant",
      scroller:"body",
      // markers:true,
      start:"top 20%",
      end:"top -60%",

      scrub:true,
      pin:true
  },
  opacity:0.5
  
});

gsap.from("nav",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:-60
  
})



