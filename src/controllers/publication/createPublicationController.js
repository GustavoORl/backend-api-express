import { createPubli } from "../../models/useModel.js";

export async function createPublicationController(req, res){
    
    const publi = req.body;

    const result = await createPubli(publi);

    res.json({
        message: "Publicação criada com sucesso!",
        publi: result
    })

}