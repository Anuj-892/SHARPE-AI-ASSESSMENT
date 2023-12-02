import React, { useState } from 'react';
const TransactionForm = () => {
  const [formData, setFormData] = useState({
    walletAddress: '',
    amount: '',
  });

  const [errors, setErrors] = useState({
    walletAddress: '',
    amount: '',
  });

  const validateWalletAddress = (address) => {
    // Basic Ethereum wallet address validation
    const isValidAddress = /^0x[a-fA-F0-9]{40}$/.test(address);
    return isValidAddress ? '' : 'Invalid Ethereum wallet address';
  };

  const validateAmount = (amount) => {
    const isValidAmount = /^\d+$/.test(amount) && parseInt(amount, 10) <= 100000;
    return isValidAmount ? '' : 'Invalid amount (maximum limit: 100,000)';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: name === 'walletAddress' ? validateWalletAddress(value) : validateAmount(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate all fields before submitting
    const walletAddressError = validateWalletAddress(formData.walletAddress);
    const amountError = validateAmount(formData.amount);
    setErrors({ walletAddress: walletAddressError, amount: amountError });

    // If there are no errors, proceed with form submission
    if (!walletAddressError && !amountError) {
      try {
        console.log('Form submitted:', formData);
        // Optionally, you can reset the form data after submission
        setFormData({ walletAddress: '', amount: '' });
      } catch (error) {
        console.error('Error submitting form:', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="walletAddress"></label>
        <input
        className='p-2 rounded-sm border border-gray-400'
          type="text"
          id="walletAddress"
          name="walletAddress"
          value={formData.walletAddress}
          onChange={handleInputChange}
          placeholder='Ethereum Wallet Address'
        />
        <span className='text-red-600'>{errors.walletAddress}</span>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="amount"></label>
        <input
        className='p-2 rounded-sm border border-gray-400'
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          placeholder='Amount (max: 100,000)'
        />
        <span className='text-red-600'>{errors.amount}</span>
      </div>
      <button className='btn' type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;

