const { PrismaClient } = require('@prisma/client');
const express = require('express');
const prisma = new PrismaClient();
const app = express();
const router = express.Router();
const userRouter = require('./routes/users');

const port = 3001;

app.get('/', (req, res) => {
  res.send('Royhan was here, Selamat Bulan Puasa');
});

app.get('/apa', (req, res) => {
  res.send('Gak papa');
});
//made it here, 13:04

app.use(express.urlencoded({ extended: true }));
app.use(express.json());    // To parse the incoming requests with JSON payloads
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});