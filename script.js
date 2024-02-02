var tl = gsap.timeline()

tl.from(".nav h3",{
    y:-100,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3,
})
tl.from(".main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4,
})

tl.from("img",{
    opacity:0,
    x:100,
    rotate:45,
    duration:0.5,
    stagger:0.5,
})

 
