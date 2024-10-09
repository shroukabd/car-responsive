import React from 'react'
import { FaInstagram, FaLocationArrow, FaMobileAlt, FaTiktok } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'

import Whitecar from "../../assets/whiteCar.png"


const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-dark
      py-5 '>
      <div className="container ">
        <div className="text-center">
           {/* company details */}
           <div className='py-8 px-4 text-center'>
            <h1 className='text-xl sm:text-3xl font-bold 
            mb-3 text-primary'>Car Rental</h1>
            <p className='dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem quos 
                tempora vero consectetur.</p>
                
           </div>
          
          
           <div className='flex items-center gap-2 dark:text-white'>
           <FaLocationArrow />
           <p className='font-bold'>Egypt, Sharqia, Zagazige</p>
           </div>
        
        <div className='flex items-center gap-2 dark:text-white'>
            <FaMobileAlt />
            <p className='font-bold'>+9 1234567890</p>
        </div>
        </div>
        <div className='flex justify-between items-center'>
        <div className='flex items-center  gap-3 dark:text-white'>
            <a href="#">
                <FaInstagram className=' text-2xl hover:text-primary duration-400'
                /></a>
                   <a href="#">
                <FaFacebook className='text-2xl hover:text-primary duration-400'
                /></a>
                   <a href="#">
                <FaTiktok className='text-2xl hover:text-primary duration-400'
                /></a>
        </div>
               <div>
                <img src={Whitecar} alt="" width={300}
                 height={300} className='mr-[90px]'/>
               </div>
               </div>
            </div>

        </div>
   
  )
}

export default Footer
