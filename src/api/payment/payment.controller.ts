import { Request, Response } from "express";
import Stripe from 'stripe';

const SECRET_KEY = process.env.STRIPE_SECRET_KEY as string
const stripe = new Stripe(SECRET_KEY, {apiVersion:'2022-11-15'} )


 async function handlePayment(req: Request, res: Response) {
    const { paymentMethod, amount } = req.body;
    console.log(req.body)
    try {
        const { id, card } = paymentMethod
         const payment = await stripe.paymentIntents.create({
           payment_method: id,
           amount,
           currency: "usd",
           confirm: true,
           description: 'pago de prueba'
         })
        

      return res.json({ message: 'success', payment });
    } catch (error) {
      console.log(error)
      return res.status(500).json(error);
      
    }
  }

export default handlePayment;