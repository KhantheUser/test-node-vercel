
const express = require('express');

const app = express();

app.get('/api',(req,res)=>{
    res.status(200).json({
        message: 'hello world'
    })
})

app.listen(8000,()=>{
    console.log('listening on9000');
})