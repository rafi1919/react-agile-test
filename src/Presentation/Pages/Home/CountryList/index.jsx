import { useState, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from '../../../Components/Card';
import DisplayModal from '../../../Components/DisplayModal';
import useCountry from '../../../../hooks/useCountry';

gsap.registerPlugin(ScrollTrigger);
// import {} from 'react-icon'

const Index =()=> {
  const {country, loading, errors} = useCountry()
  const [modalOpen, setModalOpen] = useState(false)
  const [addPage, setAddPage] = useState(20)
  const [selectedCountry, setSelectedCountry] = useState(null);


  const splitCountry = country? country.slice(0, addPage) : []
  const handleSplitCountry =()=>{
    setAddPage((prev) => prev + 20 )
  }

  useEffect(() => {
    if(loading) {
      gsap.to('.pokeball', {
        rotation:360,
        repeat:-1,
        duration: 2,
        ease: 'linear'
      })
    }
    

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

  }, []);

  const handleModalOpen = (country) => {
    setSelectedCountry(country);
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedCountry(null);
  }

  
  return (
    <>
      <div className='w-full h-full bg-slate-900 p-3'>
      <div className={(`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm duration-500`, modalOpen? 'visible' : 'hidden')}>
        ppppp
      </div>
      {modalOpen && (
          <DisplayModal 
            isOpen={modalOpen} 
            name={selectedCountry?.name} 
            onClose={handleModalClose} 
            fullname={selectedCountry?.full_name}
            size={selectedCountry?.size}
            population={selectedCountry?.population}
            continent={selectedCountry?.continent}
            flag={selectedCountry?.href.flag}
            capital={selectedCountry?.capital}
            
            />
        )}                  
        {/* <p onClick={handleModalOpen}>open</p> */}
        
        <div className="w-full bg-blackDark overflow-x-hidden flex justify-center">
            <h1 className='running-text text-[5vw] font-extrabold leading-[7rem] text-white'>DISCOVER YOUR COUNTRY</h1>
        </div>
        <div className="px-5 md:px-3 max-w-[1200px] mx-auto ">
                {/* list */}
                {loading && (
                  <div className="flex justify-center items-center h-[70vh]">
                    <img src="/image/pokeball.png" alt="pokeball" className="pokeball max-w-[100px]" />
                  </div>
                )}
                {errors && (
                  <div className="flex justify-center items-center h-[70vh]">
                    <img src="/image/error.png" alt="pokeballerror" className="pokeball max-w-[100px]" />
                    <p className='text-white font-bold'>{errors}</p>
                  </div>
                )}
                {!loading && !errors && (
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 w-full justify-items-center'>
                      {splitCountry.length > 0 && splitCountry.map((item) => (
                        <div key={item.name}>
                          <Card name={item.name} continent={item.continent} code={item.phone_code} currency={item.currency} flag={item.href.flag}  onClick={() => handleModalOpen(item)}/>
                        </div>
                      ))}
                    </div>
                  )}
                <div className='w-full flex items-center my-5 '>
                  <button onClick={handleSplitCountry} className='mx-auto rounded-md border-[1px]  active:shadow-rose-600 transition-300 border-gray-100 p-4 shadow-md active:shadow-xl hover:shadow-lg hover:shadow-green-600 shadow-white backdrop-blur-sm text-white'>Show more</button>
                </div>
        </div>

      </div>
    </>
  )
}

export default Index

