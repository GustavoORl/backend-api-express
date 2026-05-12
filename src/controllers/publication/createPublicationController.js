import { createPubli, validatePubli } from "../../models/publiModel.js";

export async function createPublicationController(req, res){
    
    const publi = req.body;

    const {success, error, data} = validatePubli(publi, {id: true});

    if(!success){
        return res.status(400).json({
            message:"Erro de validação",
            fieldErrors: error
    });
}

    const result = await createPubli(data);

    res.json({
        message: "Publicação criada com sucesso!",
        publi: result
    })

}