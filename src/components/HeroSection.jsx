import React from 'react'

const HeroSection = ({myData}) => {


    const {name} = myData;


  return (
    <section>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 mt-32">
        {/* left div */}
        <div className="space-y-6">
          <div>
            <p className="text-base text-amber-600">Welcome to</p>
            <h1 className="text-5xl font-semibold">{name}</h1>
          </div>
          <p className="text-base text-gray-600 max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            fugit totam sunt architecto minus saepe natus consequatur laborum
            commodi id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi nulla sed alias, in quod exercitationem corrupti id blanditiis beatae?
          </p>
          <button className='bg-blue-500 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition active:scale-95'>Shop Now</button>
        </div>
        {/* right div */}
        <div>
          <figure>
            <img src="image/bg.jpeg" alt="Your Mart" className="w-[700px]" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
