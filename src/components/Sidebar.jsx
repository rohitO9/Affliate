import React from 'react';
import { Users, DollarSign, TrendingUp } from 'lucide-react';
import './slidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Dashboard', icon: TrendingUp },
    { name: 'Users', icon: Users },
    { name: 'Commissions', icon: DollarSign },
    { name: 'Teams', icon: Users },
    { name: 'Products', icon: DollarSign }


  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">AffiliateTracker</h1>
        <p className="sidebar-subtitle">Commission Management</p>
      </div>
      
      <nav className="sidebar-nav">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`sidebar-tab ${activeTab === tab.name ? 'sidebar-tab-active' : ''}`}
            >
              <Icon className="sidebar-tab-icon" />
              {tab.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;