import React, { useState } from "react";
import { verifyCoupon } from "../mockapi/api";
import "./product.css"

const ReferralPage = () => {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(null);
  const [referrer, setReferrer] = useState(null);
  const [error, setError] = useState("");

  const handleApplyCoupon = async () => {
    setError("");
    try {
      const response = await verifyCoupon(coupon);
      setDiscount(response.discount);
      setReferrer(response.user);
    } catch (err) {
      setDiscount(null);
      setReferrer(null);
      setError("Invalid coupon code");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Buy Product</h1>
      <p className="product-name">🌱 ESG Toolkit - $100</p>

      <div className="input-group">
        <label>Enter Referral Code:</label>
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter your referral code"
        />
        <button className="apply-btn" onClick={handleApplyCoupon}>
          Apply
        </button>
      </div>

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