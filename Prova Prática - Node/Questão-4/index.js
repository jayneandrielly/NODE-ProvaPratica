const fs = require('fs')

const PORT = 4000

const arqNovo = 'novo.txt'
const arqAntigo = 'arquivo.txt'

fs.rename(arqNovo, arqAntigo, function(err){
    if(err){
        console.log(err)
        return
    }

console.log(f(`o arquivo ${arqAntigo} foi renomeado para ${arqNovo})`))
})