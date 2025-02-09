import React, { useState } from 'react';
import './Buy.css'; // Ensure corresponding styles are updated

const categories = {
  "Handicrafts": [
    { name: "Handmade Pottery", cost: 500 },
    { name: "Jute Bags", cost: 300 },
    { name: "Handmade Woodwork", cost: 400 }
  ],
  "Organic Products": [
    { name: "Organic Honey", cost: 400 },
    { name: "Millets", cost: 250 }
  ],
  "Textiles": [
    { name: "Handwoven Saree", cost: 1500 },
    { name: "Khadi Shirt", cost: 800 }
  ]
};

const Buy = () => {
  const [category, setCategory] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [vendorName, setVendorName] = useState('');
  const [usePoints, setUsePoints] = useState(false);
  const [pointsUsed, setPointsUsed] = useState(0);
  const [userPoints, setUserPoints] = useState(6000); // User inputs their points

  const handleProductSelection = (product) => {
    setSelectedProducts((prev) =>
      prev.some((item) => item.name === product.name)
        ? prev.filter((item) => item.name !== product.name)
        : [...prev, product]
    );
  };

  const totalCost = selectedProducts.reduce((sum, item) => sum + item.cost, 0);
  const maxPointsAllowed = Math.min(userPoints - 5000, totalCost * 10); // Ensures minimum balance of 5000

  const handlePurchase = () => {
    if (!category || selectedProducts.length === 0 || !vendorName ) {
      alert("Please fill all fields and select at least one product.");
      return;
    }

    let finalCost = totalCost;
    if (usePoints) {
      let enteredPoints = parseInt(pointsUsed, 10);

      if (isNaN(enteredPoints) || enteredPoints < 0 || enteredPoints > maxPointsAllowed) {
        alert(`Invalid points. You can use a maximum of ${maxPointsAllowed} points.`);
        return;
      }

      finalCost -= enteredPoints / 10;
    }

    alert(`Thank you for purchasing ${vendorName} your total cost is ₹${finalCost}.`);
    window.location.href = "payment.html";
  };

  return (
    <div className="buy-page">
      <div className="buy-container">
        <h1>Buy Products</h1>
        <p>Support social causes by purchasing products from trusted vendors.</p>
        <form onSubmit={(e) => e.preventDefault()}>

          <label>
            Enter Your Points:  
            <input
              type="number"
              value={userPoints}
              onChange={(e) => setUserPoints(Math.max(5000, parseInt(e.target.value) || 5000))}
              min="5000"
            />
          </label>

          <label>
            Select Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">-- Select Category --</option>
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </label>

          {category && (
            <div className="product-list">
              <h4>Select Products:</h4>
              {categories[category].map((product) => (
                <label key={product.name}>
                  <input
                    type="checkbox"
                    onChange={() => handleProductSelection(product)}
                    checked={selectedProducts.some((item) => item.name === product.name)}
                  />
                  {product.name} - ₹{product.cost}
                </label>
              ))}
            </div>
          )}

          <label>
            User Name:
            <input
              type="text"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              placeholder="Enter vendor name"
            />
          </label>
          

          <label>
            <input
              type="checkbox"
              checked={usePoints}
              onChange={() => setUsePoints(!usePoints)}
            />
            Use Points (100 points = ₹10)
          </label>

          {usePoints && (
            <label>
              Enter Points to Use:
              <input
                type="number"
                value={pointsUsed}
                onChange={(e) => setPointsUsed(Math.min(maxPointsAllowed, parseInt(e.target.value) || 0))}
                min="0"
                max={maxPointsAllowed}
              />
              <span> (Max: {maxPointsAllowed} points)</span>
            </label>
          )}

          <p>Total Cost: ₹{totalCost - (pointsUsed / 10)}</p>

          <button type="button" onClick={handlePurchase}>
            Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Buy;
