import React, { useState } from 'react';
import './Bank.css';

function Bank() {
  const [principal, setPrincipal] = useState('');
  const [time, setTime] = useState('');
  const [selectedBankRate, setSelectedBankRate] = useState(0);
  const [totalAmount, setTotalAmount] = useState(null);

  const banks = [
    { name: "State Bank of India", rate: 3.00 },
    { name: "HDFC Bank", rate: 6.00 },
    { name: "ICICI Bank", rate: 6.00 },
    { name: "Punjab National Bank", rate: 6.50 },
    { name: "Axis Bank", rate: 6.75 },
    { name: "Kotak Mahindra Bank", rate: 6.00 },
    { name: "Bank of Baroda", rate: 6.25 },
    { name: "Yes Bank", rate: 6.75 },
    { name: "IDFC FIRST Bank", rate: 7.00 },
    { name: "Canara Bank", rate: 6.25 },
    { name: "Bank of India", rate: 6.50 },
    { name: "Union Bank of India", rate: 6.30 },
    { name: "Federal Bank", rate: 6.25 },
    { name: "Standard Chartered Bank", rate: 6.00 },
    { name: "Indian Bank", rate: 6.50 },
  ];

  const handleBankChange = (e) => {
    const rate = parseFloat(e.target.value);
    setSelectedBankRate(rate);
  };

  const handleCalculate = () => {
    if (principal && time && selectedBankRate > 0) {
      const principalAmount = parseFloat(principal);
      const timePeriod = parseFloat(time);
      const totalAmount = principalAmount * (1 + (selectedBankRate / 100) * timePeriod);
      setTotalAmount(totalAmount.toFixed(2));
    } else {
      alert('Please fill in all the fields correctly!');
    }
  };

  return (
    <div className="container">
      <h3>Investment Opportunities in Bank</h3>

      <label htmlFor="bankSelect">Select Bank:</label>
      <select id="bankSelect" onChange={handleBankChange}>
        <option value="0">Select Bank</option>
        {banks.map((bank, index) => (
          <option key={index} value={bank.rate}>
            {bank.name}
          </option>
        ))}
      </select>

      <label htmlFor="principal">Principal Amount (₹):</label>
      <input
        type="number"
        id="principal"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Enter principal amount"
      />

      <label htmlFor="time">Time Period (in years):</label>
      <input
        type="number"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter time period in years"
      />

      <button onClick={handleCalculate}>Calculate Total Amount</button>

      {selectedBankRate > 0 && (
        <div id="interestRateDisplay">
          Selected Bank Interest Rate: {selectedBankRate}%
        </div>
      )}

      {totalAmount !== null && (
        <div id="investmentResult" className="result">
          Total Amount after {time} years: ₹ {totalAmount}
        </div>
      )}
    </div>
  );
}

export default Bank;

