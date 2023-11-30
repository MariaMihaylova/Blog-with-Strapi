import {menu, close, logo} from '../assets';
import {useState} from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [toggle, setToggle]= useState(false)
  const handleClick = ()=>setToggle(!toggle)

  
    return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
        <div className='flex justify-between opacity-[50%] items-center w-full h-full md:max-w-[1240px] m-auto'> 
        <div className='flex items-center '> 
        <Link to='/'><img src={logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 w-full h-[25px]' /></Link>
        </div>
             <div className='flex items-center'>
                <ul className='hidden md:flex'> 
                <Link to='/'><li>Home</li></Link>
                    <li>About</li>
                    <li>Support</li>
                </ul>
             </div>
                 <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    <button className='border-none bg-transparent text-black mr-4'>Login</button>
                    <button className='px-8 py-3 bg-violet-950 text-white btm-primary rounded-full'>Sign Up</button>

                </div>

               <div className='md:hidden cursor-pointer' onClick={handleClick}>
                    <img src={toggle?close:menu} alt="menu" className='w-[28px] h-[28px] object-contain mr-10' />
                </div>

                

        </div>
        <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <div className='flex flex-col my-4 '>
                        <button className='bg-transparent text-black mr-4 mb-4 py-3 px-8'>Login</button>
                        <button className='px-8 py-3 bg-violet-950 text-white btn-primary rounded-full'>Sign Up</button>
                    </div>
        </ul>
    </div>
  )
}

export default Navbar