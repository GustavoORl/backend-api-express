import { deletePubli, validatePubli } from "../../models/publiModel.js"

export async function deletePublicationController(req, res){
    
    const id = req.params.id

    const {success, error, data} = validatePubli({id: +id}, {title: true, description: true, author: true});

    if(!success){
        return res.status(400).json({
            message:"Erro de validação",
            fieldErrors: error
    });
}

    const result = await deletePubli(data.id);


        return res.json({
            message: "Publicação deletada com sucesso!",
            id: result
        })
    


}