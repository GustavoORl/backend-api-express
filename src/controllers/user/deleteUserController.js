import { deleteUser, validateUser } from "../../models/userModel.js";

export async function deleteUserController(req, res){
    const id = req.params.id

    const {success, error, data} = validateUser({id:+id}, {name: true, email: true, pass: true, avatar: true}); //operador "+" para converter string para number;

    if(!success){
        return res.status(400).json({
            message:"Erro de validação",
            fieldErrors: error
    });
}
    const result = await deleteUser(data.id);


        return res.json({
            message: "Usuário deletado com sucesso!",
            id: result
        });
    

    

}