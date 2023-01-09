import { Request, Response, NextFunction} from 'express';
import { getUser } from '../../api/user/user.services';
import { signToken } from '../auth.services';


export async function handleLoginUser(req: Request, res: Response,  next: NextFunction) {
    const { email, password} = req.body;
 
    try {
     const user = await getUser({ email });
 
     if (!user) {
         return res.status(404).json({ massage: "User not found"});
     }
 
     const validPassword = await user.comparePassword(password)
 
     if (!validPassword) {
         return res.status(401).json({})
     }
 
     const payload = user.profile 
 
     const token = signToken(payload);
 
     return res.status(200).json({ profile: user.profile, token});
    } catch (error: any) {
     return res.status(500).json(error.message);
    }
 }