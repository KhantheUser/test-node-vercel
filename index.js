
const express = require('express');

const app = express();

app.get('/api',(req,res)=>{
    res.status(200).json({
        message: 'hello world'
    })
})



export default app