import React from 'react'
import Image from 'next/image'
export const Events = () => {
  return (
    <div >
        <div className='flex space-x-20 justify-evenly bg-yellow-50 items-center '>
           
        <p className=' -space-x-5  p-10 text-neutral-900 text-1xl text-justify m-auto indent-8 whitespace-normal flex justify-center items-center '>Lohri is a popular winter Punjabi folk festival celebrated primarily in Northern India. The significance and legends about the Lohri festival are many and these link the festival to the Punjab region. It is believed by many that the festival marks the passing of the winter solstice.
        Under the  Ek Bharat Shreshtha Bharat club of IIT Hyderabad, all the students and faculty witnessed a vibrant Lohri celebration on 13th of January which started with a bonfire. The students along with the Director Prof. B. S. Murthy and Dean Students, Prof. P. Raja Lakshmi burnt the Lohri and celebrated according to the Punjabi traditions and customs.</p>
        <div className='p-4'>

          <Image className='rounded-3xl outline-4 -translate-x-10 shadow-2xl justify-between ' src="/../public/Lohri_Celebration.JPG" width={1500} height={800 }alt='Lohri_celebrations' />
        </div></div>

        <div className='flex justify-between bg-yellow-50  items-center'>
          
        <div className='p-5 space-x-5  '>
          <Image className='transform-x-10  flex rounded-3xl outline-4 shadow-2xl justify-between ' src="/../public/Batukamma.JPG" width={1500} height={800 }alt='Lohri_celebrations' />
        </div>
        <div className='flex  '>
           
        <p className='  p-10 text-neutral-900  text-justify m-auto indent-8 whitespace-normal flex justify-center items-center '>Bathukamma is a flower-festival celebrated by the women of Telangana and some parts of Andhra Pradesh  Students away from their homes often miss the festivities of the house. In our attempt to give the IITH campus a flavour of home, a diya decoration and rangoli making contest was organized near the mess where the students, faculty and staff showcased their artistic talents.Students away from their homes often miss the festivities of the house. In our attempt to give the IITH campus a flavour of home, a diya decoration and Bathukamma contest was organized near the mess where the students, faculty and staff showcased their artistic talents.</p>
          </div>
</div>
<div className='text-3xl p-10'>
  Experience

</div>
        </div>
        

  )
}
export default Events;
