import React from 'react'

const ChooseUs = () => {
  return (
    <div className='grid grid-cols-1 mt-14' style={{height: '700px'}}>
        <div className="text-center">
        <h1 className=' text-3xl'>WHY <span className='text-red-500'>CHOOSE US</span></h1>
        <p className=' mt-2'>Gym workouts offer a versatile and customisable experience, allowing <br /> everyone to set specific fitness goals.</p>
        </div>
    <div className="grid grid-cols-2 gap-5 w-8/12  m-auto">
      {/* */}
    <div className='border-2 border-solid border-red-500 p-5'>
        <span className='text-xl'>01</span>
        <h2 className='mt-4 text-red-500'>MOBILE TEAM</h2>
        <p className='w-7/12'>We bring our trainers, workout technology and equipment to you, making every workout private, customized and convenient
        </p>
      </div>
      <div className='border-2 border-solid border-red-500 p-5'>
        <span className='text-xl'>02</span>
        <h2 className='mt-4 text-red-500'>Bespoke Experience</h2>
        <p className='w-7/12'>We make every workout fun, goal-oriented and customized for your age, fitness level, health condition, or group size</p>
      </div>
      <div className='border-2 border-solid border-red-500 p-5'>
        <span className='text-xl'>03</span>
        <h2 className='mt-4 text-red-500'>Advanced Technology</h2>
        <p className='w-7/12' >
        We enable you to experience fitness and health results that go beyond the scale and mirror with our 3D body visualization technology
        </p>
      </div>
      <div className='border-2 border-solid border-red-500 p-5'>
        <span className='text-xl'>04</span>
        <h2 className='mt-4 text-red-500'>Satisfaction Guaranteed</h2>
        <p className='w-7/12'>
        Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals
        </p>
      </div>
    </div>
    </div>
  )
}

export default ChooseUs;
