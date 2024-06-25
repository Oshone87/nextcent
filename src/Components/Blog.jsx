import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';

function Blog() {
    const blogs = [
        {id:1, title:"Creating Streamlined Safeguarding Processes with OneRen", image:"/assets/images/image 18.png"},
        {id:2, title:"What are your safeguarding responsibilities and how can you manage them?", image:"/assets/images/image 19.png"},
        {id:3, title:"Revamping the Membership Model with Triathlon Australia", image:"/assets/images/image 20.png"},

    ]
  return (
  <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-12'>
    <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-Dgrey font-semibold mb-4'>Caring is the new marketing</h2>
        <p className='text-sm text-Dgrey mb-8 md:w-3/4 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>

    </div>

    {/* blogs */}
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {
            blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                <img src={blog.image} alt=''/>
                <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0
                right-0 -bottom-12'>
                    <h3 className='text-xs items-center mb-3 text-Dgrey'>{blog.title}</h3>
                    <p className='text-primary flex items-center justify-center'> Read more <IoIosArrowRoundForward className='ml-1' /></p>
                </div>
                </div>)
        }
    </div>
    
  </div>
  )
}

export default Blog
