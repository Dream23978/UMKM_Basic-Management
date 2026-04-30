'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/signup">Signup</Link>
        </div>
    )
}

export default Navbar
