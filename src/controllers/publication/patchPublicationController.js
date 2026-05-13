import { updatePubli, validatePubli } from "../../models/publiModel.js"

export async function patchPublicationController(req, res, next) {
    try {
        const id = req.params.id

        const publi = req.body

        const { success, error, data } = validatePubli({ id: +id, title: publi.title }, { author: true, description: true })

        if (!success) {
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: error
            });
        }

        const result = await updatePubli(data, data.id)

        res.json({
            message: "dado da Publicação atualizada com sucesso!",
            publi: result
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