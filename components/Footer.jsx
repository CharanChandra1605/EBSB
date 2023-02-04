import React from 'react'
import ItemsContainer from 'components/ItemsContainer'
export const Footer = () => {
  return (
     <footer className='bg-gray-900 text-white'> 
     {/*<div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
          <h1 className=' text-white lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
           
          </h1>
          
  </div>*/}
     <ItemsContainer className="text-red-100"  />
     </footer> 
    )
}
export default Footer;
