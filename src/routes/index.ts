import express from 'express';
import { readFile, writeFile } from 'fs/promises';
import routerContatos from './pegar-contatos.js';

const router = express.Router()
router.use(routerContatos)

router.get('/', (req, res)=>{
    res.json('Hi')
})

router.post('/contato', async (req, res)=>{
    const {nome} = req.body

    if(!nome || nome.length < 2){
        return res.json({error: 'pelo menos 2 letras pra ser um nome'})
    }

    let lista: string[] = []

    try{
        const dado = await readFile('./data/lista.txt', {encoding: 'utf8'})
        lista = dado.split('\n')
    } catch(error){}

    lista.push(nome)
    await writeFile('./data/lista.txt', lista.join('\n'))

    res.status(201).json({contato: nome})
})

export default router