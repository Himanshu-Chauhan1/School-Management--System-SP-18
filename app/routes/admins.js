import express from "express";
const adminRouter = express.Router();
import { createTeacher, createClass,createSubject } from "../controllers/admins.js"
import {createTeacherValidation,createClassValidation,createSubjectValidation} from '../validators/admins.js'


adminRouter.post('/createTeacher',[createTeacherValidation],createTeacher); 
adminRouter.post('/createClass',[createClassValidation],createClass); 
adminRouter.post('/createSubject',[createSubjectValidation],createSubject); 


export default adminRouter