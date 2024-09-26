
const express = require('express');
const router = express.Router();
const Finance = require('../models/finance');


router.get('/all', async (req, res) => {
  try {
    
    const finances = await Finance.find();

   
    console.log('Fetched Data:', finances);

    
    if (finances.length === 0) {
      console.log('No data found in the collection.');
      return res.status(404).json({ message: 'No data found' });
    }

    
    console.log('Sending response:', finances);

    res.status(200).json(finances);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
