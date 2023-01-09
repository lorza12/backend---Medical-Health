import { json } from 'body-parser';
import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { UserDocument } from '../api/user/user.model';
import { getUser } from '../api/user/user.services';
import { AuthRequest, Roles } from './auth.types';

const SECRET = process.env.SECRET_TOKEN_APP as string;

/**
 * return a jwt token signed by the app secret
 * @param payload object | string data to be signed
 * @return token string
 */

export function signToken(payload: any) {
    const token = jwt.sign(payload, SECRET, {expiresIn: '10h'})
    
    return token;
}

export function verifyToken(token: string) {
    try {
        const decoded =  jwt.verify(token, SECRET) as UserDocument;

        return decoded;
    } catch (error) {
        return false;
    }
}

export async function isAuthenticated(req: AuthRequest, res: Response, next: NextFunction) {
    const token = req.headers?.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    const decoded = verifyToken(token) as UserDocument;
  
    if (!decoded) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    const user = await getUser({ email: decoded.email });
  
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    req.user = user;
  
    next();
    return true;
  }

  export function hasRole(allowroles: Roles) {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
      const { role } = req.user as UserDocument;

      if (!allowroles.includes(role)) {
        return res.status(403).json({ message: 'forbidden' });
      }

      next();
      return true;
    }
  }