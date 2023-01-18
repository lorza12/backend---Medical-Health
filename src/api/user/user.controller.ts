import { Request, Response, NextFunction } from 'express';
import { sendEmail } from '../../utils/emails';

import {
  getAllusers,
  getUserById,
  deleteUser,
  createUser,
} from './user.services';

export async function handleAllGetUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await getAllusers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }

    return res.status(200).json(user.profile);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleCreateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  try {
    const newUser = await createUser(data);

    const msg = {
      to: newUser.email,
      from: 'mebidhealth@gmail.com',
      subject: 'Activate your account',
      templateId: 'd-63aefe4eee0c4f8f9056c191d9c04aa6',
      dynamic_template_data: {
        url: `http://localhost:8080/activate/345`,
      },
    };

    await sendEmail(msg);

    return res.status(200).json(newUser);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json(error.message);
  }
}

export async function handleDeleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    await deleteUser(id);
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
