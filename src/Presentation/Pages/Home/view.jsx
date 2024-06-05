import { useEffect, useRef } from 'react';
import Header from './Header'
import Banner from './Banner'
import CountryList from './CountryList'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeView =()=> {

  let component = useRef(null);
  useEffect(() => {
    
    let ctx = gsap.context(() => {
     
        ScrollTrigger.create ({
          trigger: ".banner-section",
          pin: true,
          start: "top top",
          end: "+=1000",
          pinSpacing:false
        }
      );

      ScrollTrigger.create({
        trigger: ".service-section",
        pin: true,
        start: "top top",
        end: "top center",
        pinSpacing: false,
      });

    }, component);   
    return () => ctx.revert();
    
}, []);

    return(
        <div>
        <div ref={component}>
            <Header />
            <div className='banner-section'>
              <Banner/>
            </div>
            <div className='service-section ' >
              <CountryList/>
             
            </div>
        </div>
      </div>
    )
}
export default HomeView