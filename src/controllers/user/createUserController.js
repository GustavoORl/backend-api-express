import { createUser } from "../../models/useModel.js";
export async function createUserController(req, res){

    const user = req.body;

     const result = await createUser(user)

     res.json ({
        message: "Usuario criado com sucesso",
        user: result
     })
 }