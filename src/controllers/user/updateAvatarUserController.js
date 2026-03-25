import { updateUser } from "../../models/useModel.js"

export async function updateAvatarUserController(req, res){
    const id = req.params.id

    const avatar = req.body.avatar

    const result = await updateUser({avatar}, +id)
        res.json({
            message: "Dado do usuário atualizado com sucesso!",
            avatar: result
        })
    }
