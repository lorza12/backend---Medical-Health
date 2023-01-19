import { Router } from 'express';
import { isAuthenticated, hasRole } from '../../auth/auth.services';


import {
    handleAllGetProducts,
    handleGetProducts,
    handleCreateProducts,
    handleDeleteProducts,

} from './products.controller';

const router = Router();
// RESTful API

// GET /api/users
router.get('/', handleAllGetProducts);
// GET /api/users/:id
router.get('/:id', handleGetProducts);
// POST /api/users
router.post('/', handleCreateProducts);
// PATCH /api/users/:id

// DELETE /api/users/:id
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteProducts);


export default router;