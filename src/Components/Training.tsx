import Image from 'next/image';
import imag0 from'../../Image/Img-Training.jpg' 

const Training = () => {
  return (
    <div className='main-container grid grid-cols-2' style={{height: '700px'}}>
      <div className='flex justify-center items-center'>
        <Image src={imag0} alt=''
        className='w-3/6  rounded-3xl'
        />
      </div>
      <div >
        <h1 className='text-3xl uppercase'>Let’s start gym <br /><span className='text-red-700'>training now</span></h1>
        <p className='mt-2'>Please select a time and date for a consultation, our team will reach out to you at the selected time
        </p>
        <div className="mt-20 ">
        <form>
            <input 
            type='text' name='text' 
            placeholder='Enter You Name...' 
            className='h-14 mb-3 mr-5 bg-black border-2 border-solid border-gray-500 p-3 text-white'
             />
            <input type='text' name='text' placeholder='Enter You Name...' 
             className='h-14 mb-3 mr-5 bg-black border-2 border-solid border-gray-500 p-3 text-white'
             />
            <input type='email' name='email' placeholder='Your Email Address... '
             className='h-14 w-4/6 mb-3 mt-5 mr-3 bg-black border-2 border-solid border-gray-500 p-3 text-white block'
              />
            <input type="submit" value="Lest join now" placeholder='' 
            className='text-red w-48 mt-5 border-2 border-solid border-red-700 p-5 block  text-red-700 text-xl' 
             />
        </form>
        </div>
     </div>
      </div>
  )
}

export default Training;
