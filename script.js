var t1= gsap.timeline();

t1  
    gsap.from(".rightbody img",{
        x:400,
        duration:1
    })
    gsap.from(".logo img",{
        x:-400,
        duration:1
    })
    gsap.from(".header-links li",{
        opacity:0,
        duration:3,
        x:5
    }   )
    gsap.from(".heading h1",{
       opacity:0,
        duration:2,
        x:5,
        color:"blue"
    })
    gsap.from(".fppara p",{
        opacity:0,
        duration:3,
        x:5
    })
    gsap.from(".button",{
        opacity:0,
        duration:3,
        x:5
    })