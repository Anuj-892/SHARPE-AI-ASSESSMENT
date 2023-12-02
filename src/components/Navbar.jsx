import React from 'react'
import { Link } from 'react-router-dom'
import { SiWeb3Dotjs } from "react-icons/si";

const Navbar = () => {
  return (
    <header className='p-3'>
        <div className="container mx-auto flex items-center justify-between">
           <Link to={'/'}><SiWeb3Dotjs size={30}/></Link>

            <nav>
                <ul className='flex items-center gap-20'>
                    <Link className='link' to={'/'}>Home</Link>
                    <Link className='link' to={'/transaction'}>Transaction</Link>
                    <Link className='link' to={'/data'}>Data</Link>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar