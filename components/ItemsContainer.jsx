import React from 'react'
import Item from 'components/Item'
import {ImFacebook,ImInstagram,ImLinkedin} from "react-icons/im"
export const ItemsContainer = () => {
  return (
    <div className=' p-4 grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 m-auto object-center justify-between flex ' >
        <div className=' p-4'>
          <div> 
            <span className='object-left-bottom p-4 text-3xl'>Follow us on</span> </div>
            <div className=' bottom-0 flex justify-center object-center p-3 m-auto  '>
                <div className='flex gap-6'>
                <a><ImFacebook className='hover:text-amber-400'> Facebook </ImFacebook> </a>
                <a> <ImInstagram className='hover:text-amber-400'> Instagram</ImInstagram></a>
                <a> <ImLinkedin className='hover:text-amber-400'> LinkedIn</ImLinkedin></a>
                </div>
            </div>
                </div>
        <div className='p-3 m-auto'> <span className='text-3xl'> Quick Links</span>
        <ul className='p-2 text-1xl object-center'>
            <li  className='p-3 justify-between  hover:text-amber-400'> About EBSB</li>
            <li className='p-3 justify-between hover:text-amber-400'>Events</li>
            <li className='p-3 justify-between hover:text-amber-400'>Experience</li>
        </ul>
         </div>
        <div className='p-10 object-center '> <span className='text-3xl'> Contact us on </span> 
        <div className='p-4 left-0 top-0 object-center m-auto hover:text-amber-200'>ebsbclub@campus.iith.ac.in </div>
        </div> 
    </div>
  )
}
export default ItemsContainer;