"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../app/globals.css';
import { useRef } from 'react';
import Image from 'next/image';
import Image1 from '../Components/Image/img1.jpg';
import Image2 from '../Components/Image/img2.jpg';
import Image3  from '../Components/Image/img3.jpg';
import Image4 from '../Components/Image/img-4.jpg';
import Image5 from '../Components/Image/img5.jpg';
import Image6  from '../Components/Image/img6.jpg';
import Image7 from '../Components/Image/img7.jpg';
import Image8 from '../Components/Image/img8.jpg';
import { Pagination } from 'swiper/modules';



const Services = () => {
    const swiperRef = useRef<any>(null);
    const handleBack = () => {
        if(swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if(swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const images = [Image1 , Image2, Image3, Image4, Image5, Image6, Image7, Image8 ];
    


  return (
    <>
        <h1 className='text-4xl mb-2 text-center mt-10'>Our <span className='text-red-600'>Services</span></h1>
      <p className='text-center'>
      Delivered By Highly Trained Fitness and Health Professionals
      </p>
      <div className='flex justify-end mr-10'>
        <button className='border-2 border-solid border-red- rounded-full p-3 bg-white text-black' onClick={handleBack}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
        </button>
        <button className='border-2 border-solid border-red-600 rounded-full p-3 ml-3 bg-red-700' onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        loop={true}
        spaceBetween={40}
       
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
              {
                images.map((img , index) => (
                    <SwiperSlide key={index}>
                 
                    <Image src={img} alt='image' 
                   className='w-full '
                  
                    />
                    <div className='mt-10 '>
                    <h2 className='text-3xl'>EVALUATION</h2>
                    <p className='mt-5 w-10/12'>3D BODY SCAN IN-DEPTH BODY ASSESSMENT PHYSICAL AND DIETARY ASSESSMENT</p>
                    <button className='bg-red-600 text-white mt-4 border-2 border-solid border-red-600 p-3 rounded-2xl w-72 text-start'>Learn More</button>
                    </div>
                    </SwiperSlide> 
                 
                ))
              }
              
      </Swiper>
    </>
  )
}

export default Services;
