import { createUser, validateUser } from "../../models/userModel.js";
import { treeifyError, flattenError } from "zod";

export async function createUserController(req, res){

    const user = req.body;

    const { success, error, data } = validateUser(user, {id: true});

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        });
    }

    const result = await createUser(data);

    return res.json({
        message: "Usuario criado com sucesso",
        user: result
    });
}