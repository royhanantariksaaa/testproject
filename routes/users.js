const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

router
    .route('/')
        .get(async (req, res) => {
            const prisma = new PrismaClient();
            const users = await prisma.user.findMany();
            res.status(200).json({data: users});
            prisma.$disconnect();
        })
        .post(async (req, res) => {
            console.log(req.body);
            const name = "John Doe";
            const email = "a@mail.com";
            const password = "password123";
            const prisma = new PrismaClient();
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password
                }
            });
            res.status(201).json({data: user});
            prisma.$disconnect();
        });

module.exports = router;