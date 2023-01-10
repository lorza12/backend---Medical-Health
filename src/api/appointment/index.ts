import { Router } from 'express';
import { isAuthenticated, hasRole } from '../../auth/auth.services';


import {
    handleAllGetAppointments,
    handleGetAppointment,
    handleDeleteAppointment,
    handleCreateAppointment,
    handleUpdateAppointment,

} from './Appointment.controller';

const router = Router();

// RESTful API

// GET /api/Appointment
router.get('/', handleAllGetAppointments);
// GET /api/Appointment/:id
router.get('/:id', handleGetAppointment);
// POST /api/Appointment
router.post('/', handleCreateAppointment);
// PATCH /api/Appointment/:id
router.patch('/:id', handleUpdateAppointment);
// DELETE /api/Appointment/:id
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteAppointment);

export default router;