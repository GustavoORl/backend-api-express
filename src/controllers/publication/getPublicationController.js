import { getPublis } from "../../models/useModel.js";

export async function getPublicationController(req, res){
    
    const result = await getPublis();

    res.json({
        message: "Publicações listadas com sucesso!",
        publis: result
    })
}