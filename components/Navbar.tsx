import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div>
        <Link href='/'>Home</Link>
        <br />
        <Link href='/protectedpage'>Protected Page - Simple example</Link>
        <br />
        <Link href='/protectedserverpage'>Protected Server Page</Link>
        <br />
        <Link href='/protectedclientpage'>Protected Client Page</Link>
        <br />
        <Link href='/unprotectedpage'>Unprotected Page</Link>
        <br />
        <Link href='/api/auth/signout'>Sign out</Link>
        <br />
        <br />
        <br />
    </div>
  )
}

export default Navbar