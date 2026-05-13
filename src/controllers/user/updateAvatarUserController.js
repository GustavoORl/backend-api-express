import { updateUser, validateUser } from "../../models/userModel.js"

export async function updateAvatarUserController(req, res, next) {
    try {
        const id = req.params.id
        const user = req.body

        const { success, error, data } = validateUser({ id: +id, avatar: user.avatar }, { name: true, pass: true, email: true })


        if (!success) {
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: error
            })
        }

        const result = await updateUser(data, data.id);

        res.json({
            message: "Dado do usuário atualizado com sucesso!",
            user: result
        })
    } catch (error) {

        if (error.code === "P2025") {
            return res.status(404).json({
                message: `Usuário não encontrado. Verifique o ID e tente novamente.`
            })
        }

        next(error);
    }
}
