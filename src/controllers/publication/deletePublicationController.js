import { deletePubli, validatePubli } from "../../models/publiModel.js"

export async function deletePublicationController(req, res, next) {
    try {

        const id = req.params.id

        const { success, error, data } = validatePubli({ id: +id }, { title: true, description: true, author: true });

        if (!success) {
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: error
            });
        }

        const result = await deletePubli(data.id);


        return res.json({
            message: "Publicação deletada com sucesso!",
            id: result
        })
    } catch (error) {

        if (error.code === "P2025") {
            return res.status(404).json({
                message: `Publicação não encontrada. Verifique o ID e tente novamente.`
            })
        }

        next(error);


    }
}