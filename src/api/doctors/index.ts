import { Router } from "express";
import {
  handleGetAllDoctors,
  handleGetDoctor,
  handleCreateDoctor,
  handleUpdateDoctor,
  handleDeleteDoctor,
  handleLoginDoctor,
} from "./doctor.controller";

const router = Router();

router.get("/", handleGetAllDoctors);

router.get("/:id", handleGetDoctor);

router.post("/", handleCreateDoctor);

router.patch("/:id", handleUpdateDoctor);

router.delete("/:id", handleDeleteDoctor);

router.post('/login', handleLoginDoctor);

export default router;
