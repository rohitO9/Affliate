import React, { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", referredBy: "", referralCode: "" });

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      setUsers(res.data);
      console.log('resp of all user', res.data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/users", formData);
      setFormData({ name: "", referredBy: "", referralCode: "" });
      fetchUsers();
    } catch (err) {
      console.error("Failed to add user", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-page">
      <h2>👥 Users List</h2>

      <form onSubmit={handleAddUser} className="add-user-form">
        <input
          type="text"
          placeholder="Enter user name*"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Referred By"
          value={formData.referredBy}
          onChange={(e) => setFormData({ ...formData, referredBy: e.target.value })}
          
        />

<input
          type="text"
          placeholder="Referral code "
          value={formData.referralCode}
          onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
          
        />
        <button type="submit">Add User</button>
      </form>

      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Referral Code</th>
            <th>Referred By</th>
            <th>Role</th>
            <th>Earnings</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.referralCode}</td>
              <td>{user.referredBy || "—"}</td>
              <td>{user.role}</td>
              <td>${user.earnings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
