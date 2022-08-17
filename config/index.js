const express = require('express')
const app = express()
const morgan = require('morgan')
const Router = express.Router()
const {connect,model,Schema} = require('mongoose')
const {success,error,info} = require('consola')
require('dotenv').config()















// !port connection
let listen = function(value){

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan("dev"))
    }
    app.listen(value,(err)=>{
        if(err) throw err;
        info(`web-spiders server is running on port ${value}`);
    })
}




//! mongo connection
let mongoConnect = function(){
    if(process.env.NODE_ENV === "production"){
        connect(process.env.MONGO_CLOUD,(err)=>{
            if(err) {
                error(err);
            }
            success("server is running on cloud database as working on production ");
        })
    }

    if(process.env.NODE_ENV === "development"){
        connect(process.env.MONG0_LOCAL,(err)=>{
            if(err) throw err
            success("server is running on local database as working on development ");
        })
    }
}










module.exports = {express,app,Router,connect,model,Schema,listen,mongoConnect}