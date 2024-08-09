import Image from 'next/image';
import React from 'react'
import img0 from '../../Image/Hero.jpg'

const Hero = () => {
  return (
     <div className='grid grid-cols-2' style={{height: "700px"}}>
     <div className='flex flex-col  justify-around  items-center'>
     <h1 className='text-white text-3xl '>lose angeles premir<br /> 
      <span className='text-red-500'>mobile fltness and health professionals</span>
      </h1>
       <p className='w-8/12 text-xl '>
       Level up your fitness and health journey with XLEVELs onsite personalized training, fitness technology and dietitian services
       </p>
       <button className='text-xl text-red-500 border-2 border-solid border-red-500 p-5 rounded-3xl hover:bg-zinc-950'>GET THE APP</button>
       <div className='flex gap-20 text-3xl text-red-500 '>
        <span>05+</span>
        <span>1000+</span>
        <span>1000+</span>
     </div>
     </div>
     <div className='flex justify-center items-center'>
            <Image 
            src={img0}
            alt='Image'
            className='w-full mr-5 ml-5 rounded-s-3xl opacity-50'
            />
     </div>
</div>
);
};

export default Hero;
