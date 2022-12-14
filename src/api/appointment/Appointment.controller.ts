import { getAllAppointments, getAppointmentById, deleteAppointment, createAppointment } from "./Appointment.services";

export async function handleAllGetAppointments(req, res) {
    try {
        const Appointments = await getAllAppointments();
        return res.status(200).json(Appointments);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}

export async function handleGetAppointment(req, res) {
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


export async function handleCreateAppointment(req, res) {
    const data = req.body;
   try {
    const newAppointment = await createAppointment(data);
    
    return res.status(201).json(newAppointment);
   } catch (error) {
    console.log(error);
        return res.status(500).json(error);
   }
}

export async function handleDeleteAppointment(req, res) {
    const { id } = req.params;
    try {
      await deleteAppointment(id)
        return res.status(200).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}