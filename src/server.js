import express from "express";
import { logger } from "./middlewares/logger.js";
import userRouter from './routers/userRouter.js';
import publicationRouter from './routers/publicationRouter.js'
import authRouter from "./routers/authRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { error404 } from "./middlewares/error404.js";
import cookieParser from "cookie-parser";


const app = express();
const PORT = 3000;


app.use(logger);
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({'message': 'Hello World!'});
});

app.use('/user', userRouter);
app.use('/publication', publicationRouter);
app.use('/auth', authRouter);

app.use(error404);

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server rodando na porta ${PORT}`);
})

