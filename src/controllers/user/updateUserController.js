import { updateUser, validateUser } from "../../models/userModel.js";

export async function updateUserController(req, res){
    
    const id = req.params.id
    const user = req.body
    user.id = +id

    const {success, error, data} = validateUser(user)

    if(!success){
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        })
    }

    const result = await updateUser(user, data.id);

    res.json({
        message: "Usuário atualizado com sucesso!",
        user: result
    })
}