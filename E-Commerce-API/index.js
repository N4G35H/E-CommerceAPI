//importing require packgs

const express =require('express');
const bodyparser = require('body-parser');
const db = require('./config/mongoose');
const PORT = process.env.PORT || 700;

//initializing express
const app = express();

app.use(bodyparser.urlencoded({extended: true}));

// app.use('/products',require('./routes/products'));


app.use('/',require('./routes'));
app.listen(PORT,()=>{
    console.log(`My server start on this Port ${PORT}`)
})