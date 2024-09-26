const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const financeRoutes = require('./routes/finance');

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/finance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));


app.use('/api/finance', financeRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
