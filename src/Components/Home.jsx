import React from 'react'

function Home() {
  return (
    <div className='bg-silver p-16 flex flex-row mt-12 justify-between md:flex flex-wrap '>
        <div>
        <h1 className='font-semibold mb-6 text-secondary text-6xl '>Lesson and <br></br> insights <span className='text-primary'>from 8 <br></br>years</span></h1>
      <p className='text-grey'>Where to grow your business as a photographer: site or social media?</p>
        <button className='bg-primary text-white px-4 py-2 rounded mt-4'>Register</button>
           
        </div>
        <div className=''>
            <img src="assets/images/Illustration.png" alt="hero" className=''/>
            </div>
    </div>
  )
}

export default Home

