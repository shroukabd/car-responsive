import React from 'react'

import pattern from "../../assets/pattern.jpg";
import PlayStoreImg from "../../assets/playStore.png";
import AppStoreImg from "../../assets/appStore.png";

const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    hight: "100%",
    width: "100%",

};


const AppStoreBanner = () => {
  return (
    
      <div className="container pb-14 dark:bg-black">
            <div className='text-black py-10 sm:min-h-[400px]
            sm:grid sm:place-items-center rounded-xl'
            style={bannerImg}
            >
              
              <div>
               <div className='space-y-6 max-w-xl mx-auto'>
                <h1 data-aos="fade-up"
                className='text-2xl text-center sm:text-4xl
                font-semibold font-serif'>Get Started With Our app</h1>
                <p data-aos="fade-up"
                className='text-center sm:px-20'>Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Iure voluptatem reiciendis alias voluptates
                     saepe?</p>
                     <div data-aos="fade-up"
                      className='flex flex-wrap justify-center
                     items-center gap-4'>
                        <a href="#">
                            <img src={PlayStoreImg} alt="" 
                            className='max-w-[150px] sm:max-w-[120px]
                            md:max-w-[200px]'/>
                        </a>
                        <a href="#">
                            <img src={AppStoreImg} alt="" 
                                   className='max-w-[150px] sm:max-w-[120px]
                                   md:max-w-[200px]'/>
                        </a>
                     </div>
               </div>
              </div>
            </div>
      </div>
   
  )
}

export default AppStoreBanner
