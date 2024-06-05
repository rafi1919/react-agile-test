import { useEffect } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index =()=>{
    useEffect(()=>{
        // gsap.fromTo('.text-right',{
        //     x:300,
        // }, {
        //     x:-500,
        //     scrollTrigger:{
        //         trigger:'.banner',
        //         toggleActions:'restart pause reverse none',
        //         start:'top center',
        //         end:'+=500',
        //         markers:true

        //     },
        // })

         gsap.fromTo('.flip-right',{
            // x:'250%',
            duration:4
         },{
            scrollTrigger:{
                trigger:'.flip-right',
                start:'top center',
                end: '+=650',
                toggleActions:'restart pause reverse none',
                scrub:true,
                pin:'true',
                // markers:true
              },
            //   x:0,
            rotationY:180,
              duration:4,
            
        })
    })

    return(
        <div className="banner w-full h-[150vh] bg-rose-600 p-5 flex rounded-tl-[45px]">
        <div className="bg-white rounded-[50px] w-full h-[90vh] overflow-hidden lg:leading-[7rem] md:leading-[10rem] leading-[7rem] flex flex-col justify-center items-center">
            <img src="/image/pokeball.png"  alt="pokeball" className="flip-right max-w-[300px]"  />
            {/* <img src="/image/glob.png"  alt="pokeball" className="flip-right max-w-[300px]"  /> */}

        </div>
    </div>

    )
}
export default Index