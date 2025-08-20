import express from 'express'
import { criarContato, pegarContatos } from '../services/contatos.js'

const router = express.Router()

router.post('/contato', async (req, res)=>{
    const {nome} = req.body

    if(!nome || nome.length < 2){
        return res.json({error: 'pelo menos 2 letras pra ser um nome'})
    }

    let lista = await pegarContatos();

    await criarContato(nome)

    res.status(201).json({contato: nome})
})

export default router;