import React from 'react'

const Forum = () => {
  return (
    <div>
        <div className='mt-[64px]'>
          <h5 className='font-montserrat text-h5 text-text-gray text-center'>FORUM</h5>
          <h2 className='font-montserrat text-h2 font-black text-center mt-[25px] mb-[60px]'>Join the Conversation</h2>
        </div>
        <div className='bg-light-green mx-[181px] rounded py-[53px]'>
            <p className='text-bdy-lg text-text-gray mx-[211px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis laoreet amet. Aliquet elementum ultrices molestie netus donec pellentesque quis.</p>
            <div className='flex justify-start'>
                <div className='bg-white'>
                    card
                </div>
            </div>
            <div className='mb-[64px]'>
                <div></div>
            </div>
            <p className='text-center font-montserrat text-bdy-rg'>
             Join and interact with a community of like minded developers
            </p>
            <div className='flex justify-center mt-[35px]'>
                <button className='bg-red rounded text-white font-montserrat py-[18px] px-[33px]'>Let’s interact - Continue to Forum</button>
            </div>
        </div>
    </div>
  )
}

export default Forum