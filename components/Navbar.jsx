import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
export const Navbar = () => {
    const[nav,setNav] = useState(false)
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
  
    const handleNav = () =>{
        setNav(!nav)
    }
    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('#ffffff');
            setTextColor('#000000');
          } else {
            setColor('transparent');
            setTextColor('#ffffff');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);
    return (


    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-amber-100'>
  <div className='max-w-[1240px] m-auto flex justify-between items-center p-3 text-yellow'>
    <Link href= '#'>
        <h1 style={{ backgroundColor: `${color}` }} className='font-bold text-5xl'>EBSB</h1>
    </Link>
    <ul style={{ backgroundColor: `${color}` }} className='hidden sm:flex'>
        <li className='p-4 text-1xl'>
            <Link href='#home'> Home</Link>
        </li>
        <li className='p-4 text-1xl'>
            <Link href='#events'>Events</Link>
        </li>
        <li className='p-4 text-1xl'>
            <Link href='#team'> Team</Link>
        </li>
    </ul>
   <div className='block sm:hidden z-10'>
        {
            nav ? <AiOutlineClose size= {20} style={{ backgroundColor: `${color}` }} /> : <AiOutlineMenu size= {20} style={{ backgroundColor: `${color}` }} />
        }
   </div>
   <div className={nav ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
   : 'sm:hidden absolute top-[-100%] right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen text-center ease-in duration-300'}>
   <ul>
        <li className='p-4 text-3xl hover:text-red-500'>
            <Link href='#home'> Home</Link>
        </li>
        <li className='p-4 text-3xl hover:text-red-500'>
            <Link href='#events'>Events</Link>
        </li>
        <li className='p-4 text-3xl hover:text-red-500'>
            <Link href='#team'> Team</Link>
        </li>
    </ul>
   </div>




  </div>
  </div>
  )
}
export default Navbar
