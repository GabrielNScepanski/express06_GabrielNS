const express=require('express');
const mysql =require('mysql2');
const mysql = require('./mysql_config') 
const functions = require('./functions')
const app = express();
const cors = require('cors')
app.listem(3000, ()=>{
    console.log("Servidor em execução");
})

const conections =mysql.createConection(mysql_config)
app.use(cors())

app.get('/', (req,res)=>{
    conection.query("SELECT * FROM  tasks",(err,result)=>{
        if(err){
         res.json(functions.response('error','erro: '+err.meassage))
        }else{
            res.json(functions.response('sucsses', 'tasks listadas com sucesso',results))
        }
    })
})