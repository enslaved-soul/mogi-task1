import { Router } from 'express';
import { getAllUsers, createUser, getUserById,  updateUser, deleteUser } from '../controllers/userController';
const router = Router();

//General Routes
router.post('/',createUser);
router.get('/',getAllUsers);

//Specific routes
router.put('/:id',updateUser);
router.get('/:id',getUserById);
router.delete('/:id',deleteUser);

export default router;
