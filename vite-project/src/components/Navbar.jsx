import React, { useState } from 'react'
import Button from './Elements/Button/Index';


const Navbar = () => {

  let Links = [
    {name:'Promo', link:'/promo'},
    {name:'Order', link:'/address'},
    {name:'Akun', link:'/'},
  ];
  let [open,setOpen]=useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('password');
    window.location.href = '/login';
};


  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-blue-600 py-4 md:px-10 px-7 z-50'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-white '>
          BlueBird
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden '>
          <ion-icon name={open ? 'close': 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-600 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-18 opacity-100' : 'top-[-490px]'}`}>
          {
            Links.map((link) =>(
              <li key={link.name} className='md:ml-8 my-7'>
                <a href={link.link} className='text-white hover:text-blue-800 duration-300'>{link.name}</a>
              </li>
            ))
          }
          <Button classname=" bg-blue-800 ml-0" onClick={handleLogout}>Logout</Button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar