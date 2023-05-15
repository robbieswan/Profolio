const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed

// Import routes
const indexRoutes = require('./routes/index');
const { connect } = require('http2');

// Parse JSON bodies
app.use(express.json());

// Use routes
app.use('/', indexRoutes);
// app.use('/profile', connect);

// Start the server
app.listen(port, () => {
  
  console.log(`Server is running on port ${port}`);
});