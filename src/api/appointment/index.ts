import { Router } from 'express';
import { isAuthenticated, hasRole } from '../../auth/auth.services';


import {
    handleAllGetAppointments,
    handleGetAppointment,
    handleDeleteAppointment,
    handleCreateAppointment,
    handleUpdateAppointment,
    handleUserHistory,

} from './Appointment.controller';

const router = Router();

// RESTful API

// GET /api/Appointment
router.get('/', handleAllGetAppointments);
// GET /api/Appointment/:id
router.get('/:id', handleGetAppointment);
// POST /api/Appointment
router.post('/', isAuthenticated, handleCreateAppointment);
// PATCH /api/Appointment/:id
router.patch('/:id',isAuthenticated, hasRole(['ADMIN', 'USER']), handleUpdateAppointment);
// DELETE /api/Appointment/:id
router.delete('/:id', isAuthenticated, hasRole(['ADMIN', 'USER']), handleDeleteAppointment);
// GET /api/Appointment/users/history
router.get('/users/history', isAuthenticated,handleUserHistory);

export default router;