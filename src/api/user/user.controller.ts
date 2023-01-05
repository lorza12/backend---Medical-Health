import { Request, Response, NextFunction, request, response} from 'express';

import { getAllusers, getUserById, deleteUser, createUser, getUser } from "./user.services";

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
    const newUser = await createUser(data);
    
    return res.status(200).json(newUser);
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

export async function handleLoginUser(req: Request, res: Response,  next: NextFunction) {
   const { email, password} = req.body;

   try {
    const user = await getUser({ email });
    console.log(user);

    if (!user) {
        return res.status(404).json({ massage: "User not found"});
    }

    const validPassword = await user.comparePassword(password)

    return res.status(200).json({ massage: "User logged in", validPassword});
   } catch (error: any) {
    return res.status(500).json(error.message);
   }
}