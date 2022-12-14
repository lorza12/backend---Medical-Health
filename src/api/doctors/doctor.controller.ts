import {
  getAllDoctors,
  getDoctorById,
  deleteDoctor,
  createDoctor,
} from "./doctor.services";
import { Request, Response } from "express";
export async function handleGetAllDoctors(req: Request, res: Response) {
  try {
    const doctors = await getAllDoctors();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function handleGetDoctor(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const doctor = await getDoctorById(id);
    if (!doctor) {
      return res
        .status(404)
        .json({ message: `Doctor with id ${id} not found` });
    }
    return res.status(200).json(doctor);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleCreateDoctor(req: Request, res: Response) {
  const data = req.body;
  try {
    const user = await createDoctor(data);
    return res.status(201).json(user);
  } catch (error) {}
}

export async function handleUpdateDoctor(req: Request, res: Response) {}

export async function handleDeleteDoctor(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteDoctor(id);
    return res.status(200).json({ message: "Doctor deleted" });
  } catch (err) {
    return res.status(500).json(err);
  }
}
