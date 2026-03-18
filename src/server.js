import express from "express";
import userRouter from './routers/userRouter.js';
import publicationRouter from './routers/publicationRouter.js'

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.use('/user', userRouter);
app.use('/publication', publicationRouter);

app.listen(PORT, ()=>{
    console.log(`Server rodando na porta ${PORT}`);
})