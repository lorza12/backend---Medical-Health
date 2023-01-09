import { Request, Response, NextFunction} from 'express';
import { AuthRequest } from '../../auth/auth.types';

import { getAllAppointments, getAppointmentById, deleteAppointment, createAppointment } from "./Appointment.services";

export async function handleAllGetAppointments(req: Request, res: Response, next: NextFunction) {
    try {
        const Appointments = await getAllAppointments();
        return res.status(200).json(Appointments);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}

export async function handleGetAppointment(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const Appointment = await getAppointmentById(id);

        if (!Appointment) {
            return res.status(404).json({message: "Appointment not found"});
        }

        return res.status(200).json(Appointment);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}


export async function handleCreateAppointment(req: Request, res: Response, next: NextFunction) {
    const data = req.body;
   try {
    const newAppointment = await createAppointment(data);
    
    return res.status(201).json(newAppointment);
   } catch (error) {
    console.log(error);
        return res.status(500).json(error);
   }
}

export async function handleDeleteAppointment(req: AuthRequest, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {

      const appointment = await deleteAppointment(id);

      if (!appointment) {
        return res.status(404).json({ message: 'appointment not found'});
      }
        return res.status(200).json({ message: 'appointment deleted'});
    } catch (error) {
        return res.status(500).json(error);

    }
}