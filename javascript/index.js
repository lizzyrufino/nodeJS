const express = require("express")
const app = express(); //tudo q for usar do express vem aqui
const axios = require("axios")

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "https://accounts.spotify.com/",
});

/*app.get("/blog", function(req,res){
  res.sendFile(__dirname+ "/html/sobre.html"); 
})
//criando rotas, caminhos para a aplicação
app.get("/",function(req, res){

    res.sendFile(__dirname+ "/html/index.html"); // dirname pega o caminho do diretorio
});

app.get("/callback",function(req, res){

    console.log(res); 
});

app.get("/sobre", function(req,res){
    res.sendFile(__dirname+ "/html/sobre.html"); 
})

*/

app.get("/login", function(req, res){
    const client_id = ""
    const client_secret= ""
    const token = ""
     axios.post('https://accounts.spotify.com/api/token',null, { 
        headers:{
            'Authorization': `Basic ${token}`,
            'content-type': `application/x-www-form-urlencoded`
        },
        params:{
            'grant_type': "client_credentials"
        }
    })
    .then((response) => {
       res.send(response.data.access_token)
    })
    .catch((error) => {
        console.log(error)
    })
        
})


/*app.get("/ola/:nome/:cargo", function(req, res){ //criando parâmetros
res.send(req.params);

});
*/
app.listen(8081, function(){
    console.log("Servidor rodando")
});
