import { updatePubli } from "../../models/useModel.js"

export async function patchPublicationController(req, res){
    const id = req.params.id
    
        const title = req.body.title
    
        const result = await updatePubli({title}, +id)
    
        res.json({
            message: "dado da Publicação atualizada com sucesso!",
            publi: result
        })
}