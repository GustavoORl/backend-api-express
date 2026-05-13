import { id } from 'zod/locales';
import {prisma} from '../helpers/dbConnection.js';
import * as z from 'zod';
import { createValidator } from '../helpers/createValidator.js';



const userSchema = z.object({
    id: z.int("Id é obrigatório e deve ser um valor numérico").positive("id deve ser um valor numérico positivo"),
    avatar: z.url("avatar deve ser uma url válida").max(500, "Avatar deve ter no maximo 500 caracteres"),
    name: z.string("Nome deve ser uma string").min(3, "Nome deve ter no mínimo 3 caracteres").max(255, "Nome deve ter no máximo 255 caracteres"),
    email: z.email("Email é obrigatório e deve ser uma string"),
    pass: z.string("Senha é obrigatória").min(6, "senha deve ter no mínimo 6 caracteres").max(255, "senha deve ter no máximo 255 caracteres")
})


export const validateUser = createValidator(userSchema);

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

export const getUsers = async (name) => {
    return await prisma.user.findMany(
        name ? { where: { name: { contains: name} } } : {}
    )
}

export const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}

export const updateUser = async (user, id) => {
    return await prisma.user.update({
        data: user,
        where: {id}
    })
}
