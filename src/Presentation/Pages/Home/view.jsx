import { useEffect, useRef } from 'react';
import Header from './Header';
import Banner from './Banner';
import CountryList from './CountryList';
import Map from './Map';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeView = () => {
  const component = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray('.panel');
    const totalPanels = panels.length;

    let ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.container',
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 1),
          end: () => `+=${document.querySelector('.container').offsetWidth * (totalPanels )}`
        }
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={component}>
        <Header />
        <div className="container">
          <div className=" panel">
          <Banner />
          </div>
          <div className="panel">
            <Map />
          </div>
        </div>
        <CountryList />
      </div>
    </>
  );
};

export default HomeView;
