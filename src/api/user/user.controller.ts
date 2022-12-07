import { getAllusers } from "./user.services";

export async function handleAllGetUsers(req, res) {
    try {
        const users = await getAllusers();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}