import React from 'react';
import { Eye } from 'lucide-react';
import { users } from '../data/NewmockData';
import './usertable.css';

const UsersTable = () => {
  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  return (
    <div className="users-table-container">
      <div className="users-table-header">
        <h3 className="users-table-title">User Performance</h3>
        <p className="users-table-subtitle">Track affiliate performance and earnings</p>
      </div>
      
      <div className="users-table-wrapper">
        <table className="users-table">
          <thead className="users-table-head">
            <tr>
              <th className="users-table-th">Name</th>
              <th className="users-table-th">Role</th>
              <th className="users-table-th">Business Generated</th>
              <th className="users-table-th">Earnings</th>
              <th className="users-table-th">Status</th>
              <th className="users-table-th">Actions</th>
            </tr>
          </thead>
          <tbody className="users-table-body">
            {users.map((user) => (
              <tr key={user.id} className="users-table-row">
                <td className="users-table-td">
                  <div className="user-info">
                    <div className="user-avatar">
                      <span className="user-avatar-text">{user.avatar}</span>
                    </div>
                    <div className="user-name">{user.name}</div>
                  </div>
                </td>
                <td className="users-table-td">
                  <span className={`role-badge ${
                    user.role === 'Team Leader'
                      ? 'role-badge-purple'
                      : user.role === 'Senior Affiliate'
                      ? 'role-badge-blue'
                      : 'role-badge-gray'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="users-table-td users-table-amount">
                  {formatCurrency(user.businessGenerated)}
                </td>
                <td className="users-table-td users-table-amount">
                  {formatCurrency(user.earnings)}
                </td>
                <td className="users-table-td">
                  <span className={`status-badge ${
                    user.status === 'Active'
                      ? 'status-badge-active'
                      : 'status-badge-inactive'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="users-table-td">
                  <button className="team-tree-btn">
                    <Eye className="team-tree-icon" />
                    Team Tree
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;