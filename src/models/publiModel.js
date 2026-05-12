import { id } from 'zod/locales';
import {prisma} from '../helpers/dbConnection.js';
import * as z from 'zod';
import { createValidator } from '../helpers/createValidator.js';

const publiSchema = z.object({
    id: z.int("ID deve ser um número inteiro").positive("ID deve ser um número inteiro positivo"),
    title: z.string("Title é obrigatório e deve ser uma string").min(3, "Title deve ter no minimo 3 caracteres").max(255, "Title deve ter no máximo 255 caracteres"),
    description: z.string("Description é obrigatória e deve ser uma string").min(3, "Description deve ter no minimo 3 caracteres").max(500, "Description deve ter no máximo 500 caracteres"),
    author: z.string("Author é obrigatório e deve ser uma string").min(3, "Author deve ter no mínimo 3 caracteres").max(255, "Author deve ter no máximo 255 caracteres"),
})

export const validatePubli = createValidator(publiSchema);

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
