// index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import chatRoutes from './routes/messageRoutes.js'

// Initialize dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("MongoDB connected successfully");
} catch (err) {
    console.error("MongoDB connection error:", err);
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});