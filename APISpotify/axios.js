// Chamando o outro servidor;


const express = require("express")
const app = express();
const axios = require("axios");

app.use(express.json({
    type: "*/*" // optional, only if you want to be sure that everything is parsed as JSON. Wouldn't recommend
}));

const api = axios.create({
    baseURL: "https://accounts.spotify.com"
});


app.get("/send", function(req,res){

    axios.post('http://localhost:8081/body',JSON.stringify({ 
        "name": 'Lis'
    })
    ,{
        headers:{
            "Content-Type": "application/json" 
           }
})  
    .then((response) => {
     res.json(response.data)
    })
    .catch((error) =>{
        console.log(error)

    })

})


app.listen(8082, function(){
    console.log("Servidor rodando lindamente")

});