import React from 'react'
import TransactionForm from '../components/TransactionForm'

const Transaction = () => {
  return (
    <div className="p-10 rounded-md text-black bg-white flex flex-col">
        <h1>Transactions</h1>

        <TransactionForm/>
    </div>
  )
}

export default Transaction