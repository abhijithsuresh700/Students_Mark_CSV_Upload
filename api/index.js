import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import studentRoute from "./routes/studentRoutes.js";

const app = express();
dotenv.config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/', studentRoute);


const connect = async(req, res) => {
    try {
         await mongoose.connect(process.env.MONGODB)
         console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error);
        throw error;
    }

};

app.listen(4000,()=>{
    connect();
    console.log("Server running on port 4000")
})