import express from 'express'
import { pegarContatos } from '../services/contatos.js'

const router = express.Router()

router.get('/contatos', async (req, res)=>{
    
    let lista = await pegarContatos();
    
    res.json({lista})
})

export default router