import express from "express";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import {uploadCSV, getStudentResult, getStudentsByResultStatus} from "../controllers/studentController.js";


const router = express.Router();

router.post("/upload", upload.single('csvFile'), uploadCSV);
router.get("/students/:id/result", getStudentResult);
router.get("/students", getStudentsByResultStatus);


export default router;