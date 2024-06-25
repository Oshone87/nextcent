import React from 'react'

function Client() {
  return (
    <div>
      <div className='p-16 text-center mt-5'>
        <h1 className='font-semibold text-Dgrey mb-2 text-3xl'>Our Clients</h1>
        <p className='text-grey text-sm'>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className='my-12 flex flex-wrap justify-evenly item-center gap-8 mt-2'>
        <div><img src = "/assets/images/Logo (1).png" alt=""/> </div>
        <div><img src = "/assets/images/Logo (2).png" alt=""/> </div>
        <div><img src = "/assets/images/Logo (3).png" alt=""/> </div>
        <div><img src = "/assets/images/Logo (4).png" alt=""/> </div>
        <div><img src = "/assets/images/Logo (5).png" alt=""/> </div>
        <div><img src = "/assets/images/Logo (6).png" alt=""/> </div>
        <div><img src = "/assets/images/Logo (7).png" alt=""/> </div>
      </div>
      <div className='text-center'>
      <h1 className='font-semibold text-Dgrey mb-2 text-3xl'>Manage your entire community <br/> in a single system</h1>
        <p className='text-grey text-sm'>Who is Nexcent suitable for?</p>
      </div>

      <div className='mt-10'>
       <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center md:gap-12 gap-8'>
       <div className='flex items-center flex-col  bg-gray-100 rounded-[35px] p-5 shadow-3x1'>
            <img src = "/assets/icon/Icon.png" alt=""/>
            <h1 className='font-semibold text-Dgrey mb-2 text-xl text-center'>Membership<br/>Organisations</h1>
            <p className='text-grey text-sm text-center'>Our membership management <br/> software provides full automation of <br/>membership renewals and payments</p>
        </div>
        <div className='flex items-center flex-col  bg-gray-100 rounded-[35px] p-5 shadow-3x1'>
            <img src = "/assets/icon/Icon (1).png" alt=""/>
            <h1 className='font-semibold text-Dgrey mb-2 text-xl text-center'>National <br/>Associations</h1>
            <p className='text-grey text-sm text-center'>Our membership management <br/> software provides full automation of <br/>membership renewals and payments</p>
        </div>
        <div className='flex items-center flex-col  bg-gray-100 rounded-[35px] p-5 shadow-3x1'>
            <img src =  "/assets/icon/Icon (2).png" alt=""/>
            <h1 className='font-semibold text-Dgrey mb-2 text-xl text-center'>Clubs And <br/>Groups</h1>
            <p className='text-grey text-sm text-center'>Our membership management <br/> software provides full automation of <br/>membership renewals and payments</p>
        </div>
       </div>
        
      </div>
    </div>
  )
}

export default Client
