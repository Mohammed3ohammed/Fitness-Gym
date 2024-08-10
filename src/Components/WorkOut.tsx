import React from 'react';
import img1 from'../../Image/mobile-app.jpg'
import Image from 'next/image';
import Link from 'next/link';

const WorkOut = () => {
  return (
    <>
      <div className='flex justify-center items-center mt-10'>
      <h1 className='text-3xl uppercase'>mobile app
      <br /> <span className='text-red-500'>for workout</span>
      </h1> 
      </div>
    <div className='grid grid-cols-2 '>    
      <div className='flex justify-center items-center'>
        <Image src={img1} alt="Image"
        className='w-5/12 h-5/6'
        />
      </div>

        <ul className='flex flex-col  justify-around items-center '>
            <li>24X7 Support from our trainers</li>
            <li>Professional Approach</li>
            <li>Scintific Proven Workout Plans</li>
            <li>Personalised Workout Plans</li>
            <li>IOS, Android App and Web Portal</li>
            <li>Exercises Video Add ons</li>
            <li>
              <Link href="#" className='text-red-500 text-xl uppercase border-2 border-red-500 border-solid p-5 rounded-2xl'>try now</Link>
            </li>
        </ul>
      </div>
      
    </>
  )
}

export default WorkOut;
