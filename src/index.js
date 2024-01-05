// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from './db/index.js';
import express from "express";

dotenv.config({
    path: './env'
})

const PORT = process.env.PORT || 8000;
connectDB()
    .then(() => {
        app.on('err', (err) => {
            console.log(`Error while connecting to server`);
            throw err
        })
        app.listen(PORT, () => {
            console.log(`Application running on port ${PORT}`)
        });
    })
    .catch((err) => {
        console.log('MONGODB Connection Failed!');
    })