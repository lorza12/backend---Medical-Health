import { Request, Response } from "express";
import User from "../user/user.model";
import Payment from "./payment.model";




export async function handlePayment(req: Request, res: Response) {
    const { paymentMethod, amount } = req.body;
    try {
        const { id, card } = paymentMethod;
        

      return res.json(Payment);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  