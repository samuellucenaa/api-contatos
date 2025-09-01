import express from 'express';
import routerPegar from './pegar-contatos.js';
import routerInserir from './inserir-contatos.js'
import routerDeletar from './deletar-contatos.js'

const router = express.Router()

router.use(routerPegar)
router.use(routerInserir)
router.use(routerDeletar)

router.get('/', (req, res)=>{
    res.json('Teste')
})

export default router