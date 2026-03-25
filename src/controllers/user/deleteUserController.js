import { deleteUser } from "../../models/useModel.js";

export async function deleteUserController(req, res){
    const id = req.params.id

    const result = await deleteUser(+id); //operador "+" para converter string para number;

    if(!result){
        return res.json({
            message: "Erro ao deletar usuário"
        })
    } else {
        return res.json({
            message: "Usuário deletado com sucesso!",
            id: result
        })
    }

    

}