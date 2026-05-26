const express = require('express')
const app = express();

app.use(express.json())
//let estoque = "Lapis"
let estoque = [
    (nome: "Lapis", valor: 1.50, quantidade: 20),
    (nome: "Borracha", valor: 2.50, quantidade: 30,
    (nome: "Caderno", valor: 3.20 quantidade: 10,


const porta = 3000;

app.get('/produtos', (req, res) => {
    res.json(estoque)
})    

app.post('/produtos', (req, res) => {
    const novoProduto = req.body;

    estoque.push(novoProduto)
    
    res.send("produto: " + novoProduto.nome + "cadastrado!")
}                            
)


app.listen(porta, () => {
    console.log("Servidor rodando de boa na porta" + porta)
})