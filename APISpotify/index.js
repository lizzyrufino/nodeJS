//chamando a API do spotify


const express = require("express")
const app = express();
const axios = require("axios");

app.use(express.json({
    type: "*/*" // optional, only if you want to be sure that everything is parsed as JSON. Wouldn't recommend
}));

const api = axios.create({
    baseURL: "https://accounts.spotify.com"
});

app.get("/login", function(req,res){

    const client_id = ""
    const client_secret = ""
    const token = ""

    axios.post('https://accounts.spotify.com/api/token',null,{
    headers:{

        'Authorization' : `Basic ${token}`,
         'content-type' : `application/x-www-form-urlencoded`
    },
    params:{
        'grant_type' : "client_credentials"
    }
})  
    .then((response) => {
        res.send(response.data.access_token)
    })
    .catch((error) =>{
        console.log(error)

    })

})

app.post("/body", function(req,res){
    console.log(req.body)
    res.status(200).json({
        success:true,
        result: JSON.stringify(req.body)

          })
  //res.send(req.body)

})


app.get("/dados", function(req,res){


    axios.get('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
        headers:{
            'Authorization' : `Bearer BQCTvUTt89ghcxuI3dSrhO4Db49thbXl7URPLypUCYG8NDhUxhTCgDd6XxZKuYydTl5LElVxVNhVBJbO3UE`,
            'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        res.send(response.data.album.artists[0].name)
    })
    .catch((error) =>{
        console.log(error)

    })
})


    app.listen(8081, function(){
        console.log("Servidor rodando lindamente")

});