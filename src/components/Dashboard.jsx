import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import SummaryCards from './SummaryCard';
import UsersTable from './UserTable';
import './dashboard.css';
import Products from "./Product";
import UsersPage from "./User"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="dashboard">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="dashboard-content">
        <Navbar activeTab={activeTab} />

        <main className="dashboard-main">
          {
            activeTab == "Products" ? (<Products />) :
            activeTab == "Users" ? (<UsersPage/>):
             (
              <>
                <SummaryCards />
                <UsersTable />
              </>
            )
          }

          {/* 
          <Products/> */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;