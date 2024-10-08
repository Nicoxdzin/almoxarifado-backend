import express from 'express';
import ManagerController from '../controller/ManagerController.ts';
import { validateDeleteClassroom, validateRegisterClassroom } from '../middlewares/managerMiddleware.ts';

const route = express.Router();

route.get('/classroomLog', ManagerController.getClassroomLog);
route.post('/registerclassroom', validateRegisterClassroom ,ManagerController.registerClassroom);
route.post('/deleteclassroom', validateDeleteClassroom, ManagerController.deleteClassroom)

export default route;