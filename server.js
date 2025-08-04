const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS so frontend can access this server
app.use(cors());

// Dummy user data
const data = {
  name: "John Doe",
  referralCode: "john2025",
  totalDonations: 4200,
  rewards: ["Certificate", "Merchandise", "Free Course"]
};

// Define the API endpoint
app.get("/api/user", (req, res) => {
  res.json(data);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
