import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center relative top-40 text-center'>
      <h1 className='text-6xl font-bold'>Welcome to Sharpe AI</h1>
      <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque rem obcaecati non debitis exercitationem doloremque consequatur libero veritatis unde distinctio!</p>
       <div className="btn-group flex gap-5 mt-3">
        <Link to={'/data'} className='bg-pink-700 text-white hover:bg-purple-500 transition-all p-2 rounded-md'>Data</Link>
        <Link to={'/transaction'} className='bg-pink-700 text-white hover:bg-purple-500 transition-all p-2 rounded-md'>Transaction</Link>
       </div>
    </div>
  )
}

export default Home