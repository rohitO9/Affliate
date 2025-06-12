import React from 'react';
import './navbar.css';

const Navbar = ({ activeTab }) => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-info">
          <h2 className="navbar-title">{activeTab}</h2>
          <p className="navbar-subtitle">Manage your affiliate network</p>
        </div>
        
        <div className="navbar-user">
          <div className="navbar-avatar">
            <span className="navbar-avatar-text">AD</span>
          </div>
          <div className="navbar-user-info">
            <p className="navbar-user-name">Admin User</p>
            <p className="navbar-user-email">admin@company.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;