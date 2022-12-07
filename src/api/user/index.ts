import { Router } from 'express';

import {
    handleAllGetUsers
} from './user.controller';

const router = Router();

// RESTful API

// GET /api/users
router.get('/', handleAllGetUsers);
// GET /api/users/:id

// POST /api/users

// PATCH /api/users/:id

// DELETE /api/users/:id


export default router;