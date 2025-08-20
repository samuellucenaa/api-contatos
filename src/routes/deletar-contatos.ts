import express from 'express';
import { readFile, writeFile } from 'fs/promises';
import { pegarContatos } from '../services/contatos.js';

const router = express.Router();

router.delete('/contato', async (req, res)=>{
    const {nome} = req.query;

    if(!nome){
        res.json({error: 'Precisa ter um nome!'})
    }

    let lista = await pegarContatos()

    lista = lista.filter(item => item.toLowerCase() !== (nome as string).toLowerCase());

    await writeFile('./data/lista.txt', lista.join('\n'))

    res.json({contato: nome})
})

export default router;