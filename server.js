const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const port = 8080 || process.env.PORT


app.use(cors())

app.get('/',(req,res)=>{
    res.send("server running")
})

app.listen(port,()=>{
    console.log('server running under the ', port);
})