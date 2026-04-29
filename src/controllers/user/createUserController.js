import { createUser, validateUser } from "../../models/useModel.js";
export async function createUserController(req, res){

    const user = req.body;

    const {success, error, data} = validateUser(user, {id: true});

    if(!success){
        return res.status(400).json({
            message:"Erro de validação",
            fieldErrors: error.flatten().fieldErrors
        })
    }

     const result = await createUser(data)

     res.json ({
        message: "Usuario criado com sucesso",
        user: result
     })
 }