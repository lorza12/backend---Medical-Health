import { Router } from 'express';
import { isAuthenticated, hasRole } from '../../auth/auth.services';


import {
    handleAllGetUsers,
    handleGetUser,
    handleDeleteUser,
    handleCreateUser,
    handleGetMe,

} from './user.controller';

const router = Router();
// RESTful API

// GET /api/users
router.get('/', handleAllGetUsers);
// GET /api/users/:id
// router.get('/:id', handleGetUser);
// POST /api/users
router.post('/', handleCreateUser);
// PATCH /api/users/:id

// DELETE /api/users/:id
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteUser);

router.get('/me', handleGetMe)

export default router;