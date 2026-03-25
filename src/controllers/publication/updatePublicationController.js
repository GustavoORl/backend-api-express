import { updatePubli } from "../../models/useModel.js"

export async function updatePublicationController(req, res){
    const id = req.params.id

    const publi = req.body

    const result = await updatePubli(publi, +id);

    res.json({
        message: "Publicação atualizada com sucesso!",
        publi: result
    })

}