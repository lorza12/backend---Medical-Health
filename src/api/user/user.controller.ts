import { Request, Response, NextFunction} from 'express';


import { getAllusers, getUserById, deleteUser, createUser } from "./user.services";

import log from '../../logger';

export async function handleAllGetUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await getAllusers();
        return res.status(200).json(users);
    } catch (error) {
        log.error(error);
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
        log.error(error);
        return res.status(500).json(error);

    }
}


export async function handleCreateUser(req: Request, res: Response,  next: NextFunction) {
    const data = req.body;
   try {
    const newUser = await createUser(data);
    
    return res.status(200).json(newUser);
   } catch (error) {
    log.error(error);
        return res.status(500).json(error);
   }
}

export async function handleDeleteUser(req: Request, res: Response,  next: NextFunction) {
    const { id } = req.params;
    try {
      await deleteUser(id)
        return res.status(200).json();
    } catch (error) {
        log.error(error);
        return res.status(500).json(error);

    }
}


