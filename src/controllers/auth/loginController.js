import { validateUser, getUserByEmail } from "../../models/userModel.js";
import { createSession } from "../../models/sessionModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";


export async function loginController(req, res, next) {

    try {
        const { email, pass } = req.body;

        const { success, error, data } = validateUser({ email, pass }, { id: true, name: true, avatar: true });

        if(!success){
            res.status(401).json({
                message: "Email ou senha incorreto!",
            })
        }

        const user = await getUserByEmail(data.email);

        console.log(user);

        if(!user){
            res.status(401).json({
                message: "Email ou senha incorreto!",
            })
        }

        const isValidPass = await bcrypt.compare(data.pass, user.pass);


        if(!isValidPass){
            res.status(401).json({
                message: "Email ou senha incorreto!",
            })
        }

        const acessToken = jwt.sign({ id: user.id}, process.env.JWT_SECRET, { expiresIn: "15m" });
        const refreshToken = uuidv4();

        const session = await createSession(user.id, refreshToken);

        console.log(session);

        if (!session) {
            return res.status(500).json({
                message: "Erro ao criar sessão"
            });
        }

        return res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true, sameSite: "None", maxAge: 6 * 30 * 24 * 60 * 60 }).json({
            message: "Login realizado com sucesso!",
            user:{
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar
            },
            acessToken,
            refreshToken
        });

    } catch (error) {

    

        next(error);
    }


}