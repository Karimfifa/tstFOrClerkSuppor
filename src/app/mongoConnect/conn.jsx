import React from 'react';

async function Conn(props) {
    const mongoose = require('mongoose');
    try {
     await mongoose.connect('mongodb+srv://karima:karim@cluster0.ax4funr.mongodb.net/');   
     console.log("Connected to MongoDB");
    } catch (error) {
        console.log("not becose" + error)
    }
}

export default Conn;