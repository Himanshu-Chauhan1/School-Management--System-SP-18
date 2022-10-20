import express from "express";
const studentRouter = express.Router();
import { createUser } from "../controllers/students.js"


studentRouter.post('/create', createUser); 



export default studentRouter