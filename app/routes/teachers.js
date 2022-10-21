import express from "express";
const teacherRouter = express.Router();
import { createTeacher } from "../controllers/teachers.js"
import {createTeachervalidation} from '../validators/teachers.js'


teacherRouter.post('/createTeacher',[createTeachervalidation],createTeacher); 


export default teacherRouter