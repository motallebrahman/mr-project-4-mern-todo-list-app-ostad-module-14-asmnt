import express from 'express';
import * as UserController from '../controller/UserController.js';
import {Authentication} from '../middleware/AuthMiddleware.js';
const router=express.Router();

router.post('/register', UserController.registration);
router.post('/login', UserController.login);
router.get('/profileDetails', Authentication, UserController.profileDetails);
  
  

export default router