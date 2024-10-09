import React from 'react'
import carpng from '../../assets/car.png'
import yellowCarPng from '../../assets/banner-car.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = ({theme}) => {
    React.useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
      });
      AOS.refresh();
    }, []);
  return (
    <div className='dark:bg-black dark:text-white
    duration-300 relative -z-20'>
      <div className="container min-h-[620px] flex">
       <div className='grid place-items-center
       grid-cols-1
       sm:grid-cols-2'>
        <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className='order-1 sm:order-2'>
            <img src={theme == "dark" ? 
                carpng : yellowCarPng} alt="" 
            className='relative -z-10 max-h-[600px]
            sm"scale-125'/>
        </div>
        <div className='order-2 sm:order-1 space-y-5
        '>
            <p data-aos="fade-up"
             data-aos-duration="1500"
             className='text-primary text-2xl
            font-serif'>Effortless</p>
            <h1 data-aos="fade-up"
               data-aos-duration="2000"
            className='text-5xl lg:text-7xl font-bold
            font-serif'
            >Car Rental</h1>
            <p data-aos="fade-up"
              data-aos-duration="2500"
              className='tracking-wide'
            >Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Expedita!</p>
                <button data-aos="fade-up"
                     data-aos-duration="3000"
                className='btn bg-primary
                text-black px-6 py-2 cursor-pointer
                rounded-md hover:bg-primary/80
                duration-300'>
                    Get Started
                </button>
        </div>

       </div>
      </div>
    </div>
  )
}

export default Hero
