const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

const corsOptions = require('./config/corsOptions');

app.use(cors(corsOptions));

const itemsRoutes = require('./routes/itemsRoutes');

app.use('/api/items', itemsRoutes);

app.listen(PORT, () => {
  console.log(`On! http://localhost:${PORT}`);
});
