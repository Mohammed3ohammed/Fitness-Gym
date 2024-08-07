import React from 'react'
import log from '../../Image/5bb89c4915f404559c8ef305eabf9820.jpg'
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='bg-white h-20'>
        <div className='flex  text-black  items-center justify-between'>
        <Image src={log} alt='Logo' 
        className='w-25 h-20'
        />
            <ul className='flex gap-11 items-center'>
                <li> <Link href="#">Our Process</Link> </li>
                <li> <Link href=''>Services</Link> </li>
                <li> <Link href="#">Packages</Link> </li>
                <li> <Link href="#">ConsulTation</Link> </li>
                <li>
                    <button className='mr-20 border-2 border-solid border-red-700 p-2 rounded-full'>
                        <Link href='#' >join the team</Link>
                    </button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar;
