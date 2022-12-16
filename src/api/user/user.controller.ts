import { getAllusers, getUserById, deleteUser, createUser } from "./user.services";

export async function handleAllGetUsers(req, res) {
    try {
        const users = await getAllusers();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}

export async function handleGetuser(req, res) {
    const { id } = req.params;
    try {
        const user = await getUserById(id);

        if (!user) {
            return res.status(404).json({message: "user not found"});
        }

        return res.status(200).json(user.fullName); 
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}


export async function handleCreateUser(req, res) {
    const data = req.body;
   try {
    const newUser = await createUser(data);
    
    return res.status(201).json(newUser);
   } catch (error) {
    console.log(error);
        return res.status(500).json(error);
   }
}

export async function handleDeleteuser(req, res) {
    const { id } = req.params;
    try {
      await deleteUser(id)
        return res.status(200).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);

    }
}