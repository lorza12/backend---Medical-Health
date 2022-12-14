import { Router } from 'express';


import {
    handleAllGetAppointments,
    handleGetAppointment,
    handleDeleteAppointment,
    handleCreateAppointment,

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

// DELETE /api/Appointment/:id
router.delete('/:id', handleDeleteAppointment);

export default router;