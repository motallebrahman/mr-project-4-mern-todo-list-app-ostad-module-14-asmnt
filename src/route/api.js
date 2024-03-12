import express from 'express';
import * as UserController from '../controller/UserController.js';
import * as ToDoController from '../controller/ToDoController.js';
import {Authentication} from '../middleware/AuthMiddleware.js';
const router=express.Router();


//Users Route
router.post('/register', UserController.registration);
router.post('/login', UserController.login);
router.get('/profileDetails', Authentication, UserController.profileDetails);
router.post('/profileUpdate/', Authentication, UserController.profileUpdate);
  
//ToDo Route  
router.post('/ToDo/create',Authentication, ToDoController.createToDo);
router.get('/ToDo/read',Authentication, ToDoController.read);
router.post('/ToDo/update/:id',Authentication, ToDoController.updateToDo);
router.get('/ToDo/delete/:id',Authentication, ToDoController.deleteToDo);


export default router