import React, { useEffect, useState } from 'react';

const API_URL = "http://localhost:5000/api/user";

function Dashboard({ internName }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(err => console.error("Error fetching user data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-2">
          Welcome, {userData?.name || internName || 'Intern'}!
        </h2>
        <p className="mb-4 text-gray-600">Here’s your portal overview:</p>

        {userData ? (
          <div className="bg-gray-100 p-4 rounded shadow text-left">
            <p><strong>Intern Name:</strong> {userData.name}</p>
            <p><strong>Referral Code:</strong> {userData.referralCode}</p>
            <p><strong>Total Donations Raised:</strong> ₹{userData.totalDonations}</p>
            <p><strong>Rewards:</strong> {userData.rewards.join(', ')}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
