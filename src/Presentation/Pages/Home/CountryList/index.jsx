import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from '../../../Components/Card';
gsap.registerPlugin(ScrollTrigger);
import axios from 'axios';

const Index =()=> {
  const [country, setcountry] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    const fetchData = async()=>{
      try {
        const tokenAuth =  "1009|SLff0Kn57xw9ufSeb1FHZY07k6XeRvhKPEbHwLlh"
        const headers = {"Authorization": `Bearer ${tokenAuth}`}
        const response = await axios.get('https://restfulcountries.com/api/v1/countries', {headers})
        const data = response.data.data
        setcountry(data)
      } catch (error) {
        throw new error('cant get')
      } finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  console.log(country)

  useEffect(() => {
    if(loading) {
      gsap.to('.pokeball', {
        rotation:360,
        repeat:-1,
        duration: 2,
        ease: 'linear'
      })
    }


    gsap.to('.parallax-container', {
      y: 70,
      duration: 2,
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top center", 
        end: "top 100px", 
        scrub: true,
        toggleActions:'restart pause reverse none',

      }
    });

    gsap.fromTo('.running-text', {
      x: -300,
    }, {
      x: 0,
      duration: 8,
      scrollTrigger: {
        trigger: ".running-text",
        start: "top 80%",
        end: "top 20%",
        scrub: 4,
      }
    });

    gsap.fromTo('.servicesText-section',{
      opacity: 0,
      y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".servicesText-section",
          start: "top 70%",
          end: "top center", 
          scrub: 4,
          // markers:true

        }
      });

  }, []);
  
  return (
    <>
      <div className='w-full min-h-screen bg-slate-900 px-3'>
        <div className="w-full bg-blackDark overflow-x-hidden flex justify-center">
            <h1 className='running-text text-[5vw] font-extrabold leading-[7rem] text-primary'>DISCOVER YOUR COUNTRY</h1>
        </div>

        <div className="px-7 md:px-3 max-w-[1200px] mx-auto ">

                {/* title or sum */}
               <div>
                <p className="text-grayDark font-bold text-lg text-justify	max-w-[550px]">try default or search by continent </p>
               </div>

                {/* list */}
                {loading ? (
                    <div className="flex justify-center items-center h-[70vh]">
                      <img src="/image/pokeball.png" alt="pokeball" className="pokeball max-w-[100px]" />
                    </div>
                  ) : (
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 w-full justify-items-center'>
                      {country.length > 0 && country.map((item) => (
                        <div key={item.name}>
                          <Card name={item.name} continent={item.continent} code={item.phone_code} currency={item.currency} flag={item.href.flag} />
                        </div>
                      ))}
                    </div>
                  )}

        </div>

      </div>
    </>
  )
}

export default Index

