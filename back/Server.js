const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const PORT = 5000; // Use any available port

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Replace this sample data with your database or authentication logic
const users = [
  { id: 1, email: '1@gmail.com', password: '123' },
  // Add more users as needed...
];

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, user });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
