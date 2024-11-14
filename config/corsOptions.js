const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

module.exports = corsOptions;
