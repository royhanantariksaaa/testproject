const { PrismaClient } = require('@prisma/client');
const express = require('express');
const prisma = new PrismaClient();
const app = express();
const router = express.Router();
const userRouter = require('./routes/users');

const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());    // To parse the incoming requests with JSON payloads
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});