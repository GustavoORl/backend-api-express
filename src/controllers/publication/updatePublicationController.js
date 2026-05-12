import { updatePubli, validatePubli } from "../../models/publiModel.js"

export async function updatePublicationController(req, res){
    const id = req.params.id

    const publi = req.body
    publi.id = +id

    const {success, error, data} = validatePubli(publi)

    if(!success){
        return res.status(400).json({
            message:"Erro de validação",
            fieldErrors: error
    });
}

    const result = await updatePubli(data, data.id);

    res.json({
        message: "Publicação atualizada com sucesso!",
        publi: result
    })

}