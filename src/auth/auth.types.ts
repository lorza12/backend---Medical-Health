import { Request } from "express"
import { type } from "os";
import { UserDocument } from "../api/user/user.model"

export interface AuthRequest extends Request {
    user?: UserDocument;
}

export type Role = 'ADMIN' | 'USER';

export type Roles = Role[];