import { Router } from 'express';


import {
    handleAllGetUsers,
    handleGetuser,
    handleDeleteuser,
    handleCreateUser,

} from './user.controller';

const router = Router();

// RESTful API

// GET /api/users
router.get('/', handleAllGetUsers);
// GET /api/users/:id
router.get('/:id', handleGetuser);
// POST /api/users
router.post('/', handleCreateUser);
// PATCH /api/users/:id

// DELETE /api/users/:id
router.delete('/:id', handleDeleteuser);

export default router;