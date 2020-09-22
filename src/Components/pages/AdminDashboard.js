import React from 'react';

const AdminDashboard = ({ name }) => {
  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Hello Admin {name}!
      </h1>
    </div>
  );
};

export default AdminDashboard;
