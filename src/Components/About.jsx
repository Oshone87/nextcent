import React from 'react'

function About() {
  return (
    <div>
      {/* about */}
      <div className='p-16 max-w-screen-2x1 mx-auto my-8 mt-20'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-evenly items-center gap-12'>
            <div className=''>
                <img src = "/assets/images/Frame 35.png" alt='about'/>
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-Dgrey font-semibold mb-4 md:w-4/5'>
                The unseen of spending three <br/> years at Pixelgrade
                </h2>
                <p className='md:w-3/4 text-sm text-Dgrey mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className='bg-primary text-white px-4 py-2 rounded-md'>Learn more</button>

            </div>
        </div>
      </div>

      {/* company */}
      <div className='p-12 max-w-screen-2x1 mx-auto bg-silver '>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div>
                <h2 className='font-semibold text-4xl text-Dgrey'>Helping a local <br/> <span className='text-primary'>business reinvent itself</span></h2>
                <p className='mt-2'>We reached here with our hard work and dedication</p>
            </div>
            {/* company icons */}
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-8'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'> 
                        <img src="/assets/icon/member.png" alt='icon'/>
                       <div>
                         <h4 className='text-2xl text-Dgrey font-semibold'>2,245,341</h4>
                        <p className='text-xs text-grey'>Members</p>
                       </div>
                    </div>
                    <div className='flex items-center gap-4'> 
                        <img src="/assets/icon/group.png" alt='icon'/>
                       <div>
                         <h4 className='text-2xl text-Dgrey font-semibold'>46,238</h4>
                        <p className='text-xs text-grey'>Clubs</p>
                       </div>
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'> 
                        <img src="/assets/icon/bookings.png" alt='icon'/>
                       <div>
                         <h4 className='text-2xl text-Dgrey font-semibold'>745,341</h4>
                        <p className='text-xs text-grey'>Event bookings</p>
                       </div>
                    </div>
                    <div className='flex items-center gap-4'> 
                        <img src="/assets/icon/payments.png" alt='icon'/>
                       <div>
                         <h4 className='text-2xl text-Dgrey font-semibold'>845,341</h4>
                        <p className='text-xs text-grey'>Payments</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
