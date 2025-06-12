import React, { useEffect, useState } from 'react';
import { Users, DollarSign, TrendingUp } from 'lucide-react';
import { summaryData } from '../data/NewmockData';
import './summarycard.css';
import axios from 'axios';

const SummaryCards = () => {

  const [dashboardData, setDashboardData] = useState();

  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
  }

  const fetchDashboardData = async()=>{
    try{
        const resp = await axios.get('http://localhost:5000/users/dashboard/stats');
        console.log('dashboard data', resp.data);
        setDashboardData(resp.data);
    }catch(error){
      console.log('error', error);
    }
  }

  useEffect(()=>{
    fetchDashboardData();
  }, [])

  const cards = [
    {
      title: 'Total Users',
      value: dashboardData?.totalUsers,
      icon: Users,
      iconClass: 'card-icon-blue',
      change: '+12%'
    },
    {
      title: 'Total Business',
      value: dashboardData?.totalBusiness,
      icon: TrendingUp,
      iconClass: 'card-icon-green',
      change: '+8.5%'
    },
    {
      title: 'Commission Paid',
      value: dashboardData?.totalCommissionPaid,
      icon: DollarSign,
      iconClass: 'card-icon-purple',
      change: '+15.3%'
    }
  ];

  return (
    <div className="summary-cards">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className="summary-card">
            <div className="summary-card-content">
              <div className="summary-card-info">
                <p className="summary-card-title">{card.title}</p>
                <p className="summary-card-value">{card.value}</p>
              </div>
              <div className={`summary-card-icon ${card.iconClass}`}>
                <Icon className="summary-card-icon-svg" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryCards;