gsap.to(".contant",{

  scrollTrigger:{
      trigger:".contant",
      scroller:"body",
    
      start:"top 20%",
      end:"top -60%",

    
      pin:true
  },
  opacity:0.9
  
});

gsap.from("nav",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:-60
  
})



