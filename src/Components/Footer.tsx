import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 justify-center items-center mt-10' style={{height: '500px'}}>
      <div className='flex justify-around items-center'>
      <div>
      <h2 className='w-96 '>XLEVEL was founded by fitness,
          health and technology experts 
          committed to making fitness and 
          health more fit for your place and pace</h2>
      <p className='block w-72'> Copyright Xlevel Fitness + Health </p>
    </div>

    <ul>
        <li className='mt-3'><Link href="#" className='text-red-700'>Service</Link></li>
        <li className='mt-3'><Link href="#">Performance</Link></li>
        <li className='mt-3'><Link href="#">Evaluation</Link></li>
        <li className='mt-3'><Link href="#">Location</Link></li>
        <li className='mt-3'><Link href="#">Strength</Link></li>
        <li className='mt-3'><Link href="#">Intensity</Link></li>
        <li className='mt-3'><Link href="#">Recovery</Link></li>
      </ul>
      <ul>
      <li><Link href="#" className='text-red-700'>Company</Link></li>
      <li className='mt-3'><Link href="#">Service</Link></li>
      <li className='mt-3'><Link href="#">Plan</Link></li>
      <li className='mt-3'><Link href="#">Our Team</Link></li>
      <li className='mt-3'><Link href="#">Consultation</Link></li>
      <li className='mt-3'><Link href="#">Blog</Link></li>
      <li className='mt-3'><Link href="#">Contact Us</Link></li>
      </ul>

      <form>
        <label className='block mb-3'>Your Email</label>
        <input type='email' placeholder='Enter your email'
        className='p-2 border-2 border-solid border-red-700 bg-gray-950 w-72 '
        />
        <input type='submit' value="Subscribe" 
        className='ml-5 border-2 border-solid border-red-700 p-3 rounded-xl '
        />
      </form>
      </div>
    </footer>
  )
}

export default Footer;
