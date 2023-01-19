import {  Request, Response, NextFunction} from 'express';
import { AuthRequest } from '../../auth/auth.types';
import { sendMailSendGrid } from '../../utils/emails';
import User from "./user.model";


import { getAllusers, getUserById, deleteUser, createUser } from "./user.services";

export async function handleAllGetUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await getAllusers();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}

export async function handleGetUser(req: Request, res: Response,  next: NextFunction) {
    const { id } = req.params
    try {
        const user = await getUserById(id);

        if (!user) {
            return res.status(404).json({message: "user not found"});
        }

        return res.status(200).json(user.profile); 
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}


export async function handleCreateUser(req: Request, res: Response,  next: NextFunction) {
    const data = req.body;
   try {
    {
        const newUser = await  createUser(data);
        const msg = {
          to: newUser.email,
          from: `'No Reply' <lorza112@hotmail.com>`,
          subject: 'Welcome to MEBID Healthcare',
          text: 'Welcome to MEBID Healthcare',
          html: '<strong>Welcome to MEBID</strong>',
        };
    ​
        await sendMailSendGrid(msg);
    ​
        return res.status(201).json(newUser);
      }
   } catch (error) {
    console.log(error);
        return res.status(500).json(error);
   }
}



export async function handleDeleteUser(req: Request, res: Response,  next: NextFunction) {
    const { id } = req.params;
    try {
      await deleteUser(id)
        return res.status(200).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}

export async function handleGetMe(req: AuthRequest, res: Response,  next: NextFunction) {
    const id = req.user?._id;
    const data = req.params;
    
    try {
        // const user = await getUserById(id);
        const foundUser =await User.find(id).populate({path: "appointments", select: "doctor date"});
        console.log(foundUser)

        if (!foundUser) {
            return res.status(404).json({ message: " user not found"});
        }

        return res.status(200).json(foundUser);
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
}

