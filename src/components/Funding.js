import React, { useState } from 'react';
import './Funding.css'; // External CSS file

const Funding = () => {
  const [income, setIncome] = useState({
    netSalary: 0,
    partnerSalary: 0,
    otherIncome: 0
  });

  const [expenses, setExpenses] = useState({
    grocery: 0, domesticHelp: 0, bills: 0, emi: 0,
    tuitionFees: 0, insurance: 0, otherEssential: 0,
    eatingOut: 0, movie: 0, shopping: 0, salon: 0,
    creditCardInterest: 0, holiday: 0, otherNonEssential: 0
  });

  const totalIncome = Object.values(income).reduce((a, b) => a + b, 0);
  const totalEssentialExpenses = expenses.grocery + expenses.domesticHelp + expenses.bills +
    expenses.emi + expenses.tuitionFees + expenses.insurance + expenses.otherEssential;
  const totalNonEssentialExpenses = expenses.eatingOut + expenses.movie + expenses.shopping + expenses.salon +
    expenses.creditCardInterest + expenses.holiday + expenses.otherNonEssential;
  const totalExpenses = totalEssentialExpenses + totalNonEssentialExpenses;
  const savings = totalIncome - totalExpenses;

  const handleInvestClick = () => {
    window.location.href = '/Oppurtunities'; // Replace with your actual navigation link
  };
  const moveto = () => {
    window.location.href = '/debt.html';}; // Replace with your actual navigation link
  return (
    <div className="budget-tool">
      <h2>Expense Calculator</h2>

      <div className="income-section">
        <h3>Income</h3>
        {['Net Salary', 'Partner Salary', 'Other Income'].map((label, index) => (
          <div key={index} className="form-group">
            <label>{label} (₹):</label>
            <input
              type="number"
              onChange={(e) => {
                const keys = ['netSalary', 'partnerSalary', 'otherIncome'];
                setIncome({ ...income, [keys[index]]: parseFloat(e.target.value) || 0 });
              }}
            />
          </div>
        ))}
        <div className="total-row">
          <label>Total Income per month: ₹{totalIncome}</label>
        </div>
      </div>

      <div className="expense-section">
        <h3>Expense Sheet</h3>
        <div className="columns">
          <div className="column">
            <h3>Your Essential Expenses</h3>
            {['grocery', 'domesticHelp', 'bills', 'emi', 'tuitionFees', 'insurance', 'otherEssential'].map((key, index) => (
              <div key={index} className="form-group">
                <label>{key.replace(/([A-Z])/g, ' $1')} (₹):</label>
                <input
                  type="number"
                  onChange={(e) => setExpenses({ ...expenses, [key]: parseFloat(e.target.value) || 0 })}
                />
              </div>
            ))}
            <div className="total-row">
              <label>Total Essential Expenses: ₹{totalEssentialExpenses}</label>
            </div>
          </div>
          <div className="column">
            <h3>Your Non-Essential Expenses</h3>
            {['eatingOut', 'movie', 'shopping', 'salon', 'creditCardInterest', 'holiday', 'otherNonEssential'].map((key, index) => (
              <div key={index} className="form-group">
                <label>{key.replace(/([A-Z])/g, ' $1')} (₹):</label>
                <input
                  type="number"
                  onChange={(e) => setExpenses({ ...expenses, [key]: parseFloat(e.target.value) || 0 })}
                />
              </div>
            ))}
            <div className="total-row">
              <label>Total Non-Essential Expenses: ₹{totalNonEssentialExpenses}</label>
            </div>
          </div>
        </div>
      </div>

      <div className="summary">
        <h3>Summary</h3>
        <p>Total Income: ₹{totalIncome}</p>
        <p>Total Expenses: ₹{totalExpenses}</p>
        <p>Available Savings: ₹{savings}</p>

        {savings > 0 ? (
          <div className="options">
            <button onClick={ moveto }>Clear Debt</button>
            <button onClick={handleInvestClick}>Invest</button>
          </div>
        ) : (
          <p className="debt-alert">You are in debt of ₹{-savings}. Please plan accordingly.</p>
        )}
      </div>
    </div>
  );
};

export default Funding;
