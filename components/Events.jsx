import React from 'react'
import Image from 'next/image'
export const Events = () => {
  return (
    <div >
        <div className='flex justify-between items-start bg-yellow-100 top-0 right-0'>
           
        <p className='pl-20 text-1xl m-auto indent-8 whitespace-normal'>Lohri is a popular winter Punjabi folk festival celebrated primarily in Northern India. The significance and legends about the Lohri festival are many and these link the festival to the Punjab region. It is believed by many that the festival marks the passing of the winter solstice.
        Under the <span className='uppercase text-fuchsia-800 text-2xl'> Ek Bharat Shreshtha Bharat club</span> of IIT Hyderabad, all the students and faculty witnessed a vibrant Lohri celebration on 13th of January which started with a bonfire. The students along with the Director Prof. B. S. Murthy and Dean Students, Prof. P. Raja Lakshmi burnt the Lohri and celebrated according to the Punjabi traditions and customs.</p>
        <div className='p-3'>
          <Image className='rounded-3xl shadow-2xl left-0' src="/../public/Lohri_Celebration.JPG" width={2000} height={800 }alt='Lohri_celebrations' />
        </div></div>
        <div className='text-2xl'> Next Event</div>


        </div>
        

  )
}
export default Events;
