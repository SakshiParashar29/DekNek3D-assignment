require('dotenv').config();

const express = require('express');
const connectDB = require('./database/db');
const authRoutes = require('./routes/user-routes');
const cors = require('cors');
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running...");
});

