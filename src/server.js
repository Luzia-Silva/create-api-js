const express = require("express");
const app = express();
// Para que outras pessoas possam fazer requisição na sua api
const cors = require("cors");
const data = require("./data.json")

//Express use o json, estou somente avisando ele para usar o JSON👌
app.use(express.json()) 
app.use(cours());


//Sempre/Forever será request(req)-> REQUISIÇÃO feita pelo cliente e depois responde(res)-> RESPOSTA
//Get
app.get("/requestCoffe" , function(req, res) {
  res.status(200).json(data).send();
}) //listando todos meus clientes que estão json

app.get("/requestCoffe/:id" , function(req, res) {
  const { id } = req.params

  const {required, amount, value, name} = req.query

  const users = data.find(user => user.id == id)

  //Não existe o id do user pesquisado
  if(!users) return res.status(204).json()

  res.status(200).json(data).send();

}) 

//Post
app.post("/requestCoffe" , function(req, res) {
  const {id, required, amount, value, name} = req.body

  res.status(201).json({id, required, amount, value, name}).send()
  
})
//Put
app.put("/requestCoffe/:id" , function(req, res) {
  const{id} = req.params
  const users = data.find(user => user.id == id)

  if(!users) return res.status(204).json() //Não existe o id do user pesquisado 

  const {required} = req.body //Acesso o corpo da minha requisição e realizo a mudança

  users.required = required; //armazeno essa update

  res.status(200).json(data).send();//mostro para o usuário
  
})
//Delete
app.delete("/requestCoffe/:id" , function(req, res) {
  const {id} = req.params
  const users = data.filter(user => user.id != id)//Ele deletou aquele que não era diferente 

   res.status(204).json(data).send();
  
})


//A função app. listen() do Express inicia um socket UNIX e escuta as conexões em um caminho fornecido.
app.listen(3000, function() {
    console.log("Server is running")
})
