import React from 'react'

const Transaction = () => {
  return (
    <div className="p-10 rounded-md text-black bg-white flex flex-col">
        <h1>Transactions</h1>

        <form className='flex flex-col gap-5'>
            <label htmlFor="wallet-address"></label>
            <input className='p-2 rounded-sm border border-gray-400' type="text" name='wallet-address' placeholder='Wallet Address'/>
            <label htmlFor="amount"></label>
            <input className='p-2 rounded-sm border border-gray-400' type="number" max={10000} name='amount' placeholder='Amount'/>
            <button className='btn'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Transaction