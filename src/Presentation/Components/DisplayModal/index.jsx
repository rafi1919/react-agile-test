import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Tag from '../Tag';

const DisplayModal = ({ isOpen, name, onClose, fullname, capital, size, population, flag, continent }) => {
    const modalRef = useRef();
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShowModal(true);
            gsap.fromTo(modalRef.current, 
                { x: '100%' }, 
                { x: '0%', duration: 0.5, ease: 'power3.inOut' }
            );
        } 
    }, [isOpen]);

    const handleClose = () => {
        gsap.to(modalRef.current, 
            { x: '100%', duration: 0.5, ease: 'power3.inOut', onComplete: () => {
                setShowModal(false);
                onClose();
            }}
        );
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end backdrop-blur-sm duration-500">
            <div ref={modalRef} className="bg-white p-6 rounded-md lg:w-[1000px] w-full lg:h-fit h-[50vh] shadow-lg flex">
                <div className='bg-rose-600 rounded-l-full w-[80px] h-[200px]'></div>
                <div className='lg:max-w-[900px] w-full h-[200px] flex lg:flex-row md:flex-row flex-col px-2 lg:justify-around md:justify-around justify-center'>
                    <img src={flag} alt={`${name} flag`} className='lg:w-[300px] md:w-[200px] sm:w-[150px] w-full h-auto rounded object-cover' />
                    <div className='flex flex-col items-center'>
                        <div className=''>
                            <p className="font-semibold lg:text-md text-sm">Name: <span className='font-bold'>{name}</span> </p>
                            <p className="font-semibold lg:text-md text-sm">Full Name: <span className='font-bold'>{fullname}</span></p>
                            <p className="font-semibold lg:text-md text-sm">Capital: <span className='font-bold'>{capital}</span></p>
                            <p className="font-semibold lg:text-md text-sm flex">Continent: <span><Tag continent={continent} /></span></p>
                            <div className='bg-green-600 rounded w-fit p-2 my-2 border-2 border-black'>
                                <p className="font-bold lg:text-medium text-sm">Size:  <span className='font-bold'>{size}</span></p>
                                <p className="font-bold lg:text-medium text-sm">Population:  <span className='font-bold'>{population}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-rose-600 rounded-r-full w-[80px] h-[200px] flex items-center justify-center'>
                    <p onClick={handleClose} className='font-xl font-bold cursor-pointer'>x</p>
                </div>
            </div>
        </div>
    );
}

export default DisplayModal;
