const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/docs', require('./routes/documentation'));
app.use('/api/testing', require('./routes/testing'));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/api-doc-adapter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});