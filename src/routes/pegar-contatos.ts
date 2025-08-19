import express from 'express'
import { readFile } from 'fs/promises'

const router = express.Router()

router.get('/contatos', async (req, res)=>{
    
    let lista: string[] = []
    
    try{
        let contatos: string = await readFile('./data/lista.txt', {encoding: 'utf8'})
        lista = contatos.split('\n')
    } catch(error){}
    
    res.json({lista})
})

export default router