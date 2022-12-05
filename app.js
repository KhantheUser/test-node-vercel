
const express = require('express');
const router  = require('./routes/apiRoute')
const app = express();

app.use('/api',router)



module.exports=app