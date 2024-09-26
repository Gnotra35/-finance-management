// backend/routes/finance.js
const express = require('express');
const router = express.Router();
const Finance = require('../models/finance');

// Route to get all financial data
router.get('/all', async (req, res) => {
  try {
    // Fetch all data from MongoDB
    const finances = await Finance.find();

    // Log fetched data to the console
    console.log('Fetched Data:', finances);

    // If no data is found, send a specific message
    if (finances.length === 0) {
      console.log('No data found in the collection.');
      return res.status(404).json({ message: 'No data found' });
    }

    // Log the data being sent in the response
    console.log('Sending response:', finances);

    // Send the data as JSON response
    res.status(200).json(finances);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
