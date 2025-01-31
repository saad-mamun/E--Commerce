import React from 'react'

const Trusted = () => {
  return (
    <section className='bg-blue-50 py-10 mb-3'>
      <div className='container mx-auto text-center'>
        <h1 className='text-black font-semibold md:text-3xl sm:text-lg text-base py-3'>Trusted By 100+ Companies</h1>
        <div className='flex items-center justify-evenly'>
          {/* companies-logo  */}
          <img src="public/image/logo.png" className='w-12' alt="Logo" />
          <img src="public/image/logo.png" className='w-12' alt="Logo" />
          <img src="public/image/logo.png" className='w-12' alt="Logo" />
          <img src="public/image/logo.png" className='w-12' alt="Logo" />
          <img src="public/image/logo.png" className='w-12' alt="Logo" />
        </div>
      </div>
    </section>
  )
}

export default Trusted
