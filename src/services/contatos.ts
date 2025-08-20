import { readFile, writeFile } from "fs/promises"

export const pegarContatos = async ()=>{
    let lista: string[] = []
    
    try{
        const dados = await readFile('./data/lista.txt', {encoding: 'utf8'})
        lista = dados.split('\n')
    } catch(error){}

    return lista;
}

export const criarContato = async (nome: string)=>{
    let lista = await pegarContatos()

    lista.push(nome)
    await writeFile('./data/lista.txt', lista.join('\n'))
}