import { deletePubli } from "../../models/useModel.js"

export async function deletePublicationController(req, res){
    
    const id = req.params.id

    const result = await deletePubli(+id);
    if(!result){
        return res.json({
            message: "Erro ao deletar publicação"
        })
    } else {
        return res.json({
            message: "Publicação deletada com sucesso!",
            id: result
        })
    }


}