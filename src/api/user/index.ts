import { Router } from 'express';


import {
    handleAllGetUsers,
    handleGetUser,
    handleDeleteUser,
    handleCreateUser,
    handleLoginUser,

} from './user.controller';

const router = Router();
// RESTful API

// GET /api/users
router.get('/', handleAllGetUsers);
// GET /api/users/:id
router.get('/:id', handleGetUser);
// POST /api/users
router.post('/', handleCreateUser);
// PATCH /api/users/:id

// DELETE /api/users/:id
router.delete('/:id', handleDeleteUser);

//login
router.post('/login', handleLoginUser);

export default router;