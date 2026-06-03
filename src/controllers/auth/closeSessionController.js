import { deleteAllSessionsByUserId } from "../../models/sessionModel.js";

export const closeSessionController = async (req, res, next) => {
   
        const userId = req.userId
    
      try{
        const result = await deleteAllSessionsByUserId(userId)
        res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'None', secure: true })
        return res.status(200).json({
            message: "Todas as sessões do usuário foram encerradas com sucesso. Faça login novamente para iniciar uma nova sessão."
        })

      }catch(error){
        next(error)
      }
}