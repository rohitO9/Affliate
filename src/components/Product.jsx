import React, { useState } from "react";
import { verifyCoupon } from "../mockapi/api";
import "./product.css"
import axios from "axios";

const ReferralPage = () => {
  const [buyer, setBuyer] = useState('');
  const [amount, setAmount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(null);
  const [referrer, setReferrer] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/purchase", {amount, buyer, referrerCode: coupon});
      setAmount(0);
      setBuyer('');
      setCoupon('');
      console.log('product added successfully', res.data);
    } catch (err) {
      console.error("Failed to add user", err);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Buy Product</h1>
      <p className="product-name">🌱 ESG Toolkit - $100</p>

      <form onSubmit={handleSubmit} className="input-group">
        <div className="form-field">
          <label htmlFor="buyer">Buyer Name:</label>
          <input
            id="buyer"
            type="text"
            value={buyer}
            onChange={(e) => setBuyer(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter your amount"
            required
            min="0"
          />
        </div>

        <div className="form-field">
          <label htmlFor="coupon">Referral Code:</label>
          <input
            id="coupon"
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter your referral code"
            required
          />
        </div>

        <button type="submit" className="apply-btn">
          Submit
        </button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {referrer && (
        <div className="result-box">
          <p>✅ <strong>Coupon Applied Successfully!</strong></p>
          <p><strong>Referrer:</strong> {referrer.name}</p>
          <p><strong>Discount:</strong> ${discount}</p>
          <p><strong>Final Price:</strong> ${100 - discount}</p>
        </div>
      )}
    </div>
  );
};

export default ReferralPage;