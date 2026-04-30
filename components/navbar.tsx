'use client'
import React from 'react'
import Link from 'next/link'

const links = [
    {label : 'Menu' , href : '/menu'},   
    {label : 'Tentang' , href : '/Tentang'},   
    {label : 'Kontak' , href : '/kontak'},   
    {label : 'Hubungi Kami' , href : '/hubungi'},   
]

const Navbar = () => {
  return (
    <nav className='group flex flex-wrap gap-7 p-7 justify-center'>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className='transition-colors duration-200 group-hover:text-gray-400
         hover:!text-black hover:underline ml-3'>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
