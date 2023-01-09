import { Router } from "express";
import {
  handleGetAllDoctors,
  handleGetDoctor,
  handleCreateDoctor,
  handleDeleteDoctor,
} from "./doctor.controller";

const router = Router();

router.get("/", handleGetAllDoctors);

router.get("/:id", handleGetDoctor);

router.post("/", handleCreateDoctor);

// router.patch("/:id", handleUpdateDoctor);

router.delete("/:id", handleDeleteDoctor);

export default router;
