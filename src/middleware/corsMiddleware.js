const cors = require('cors');

const corsOptions = {
  origin: '*', // Em produção, defina as origens permitidas
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

module.exports = cors(corsOptions);