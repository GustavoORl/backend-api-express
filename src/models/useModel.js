import {prisma} from '../helpers/dbConnection.js';
import * as z from 'zod';



const userSchema = z.object({
    id: z.int().positive(),
    avatar: z.string().url().max(500),
    name: z.string().min(3).max(255),
    email: z.string().email(),
    pass: z.string().min(6).max(255),
})


export const validateUser = async(user, partial = false) => {
    if(partial){
        return userSchema.partial(partial).safeParse(user)
    }
    return userSchema.safeParse(user)

}

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

export const getUsers = async () => {
    return await prisma.user.findMany()
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

export const getPublis = async () => {
    return await prisma.publi.findMany()
}

export const createPubli = async (publication) => {
    return await prisma.publi.create({
        data: publication
    })
}

export const deletePubli = async (id) => {
    return await prisma.publi.delete({
        where: {
            id
        }
    })
}

export const updatePubli = async (publi, id) => {
    return await prisma.publi.update({
        data: publi,
        where: {id}
    })
}
