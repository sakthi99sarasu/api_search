const express=require('express');
const http=require('http');
const app=express();



http.createServer(app.listen(4000));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./routes/routes')(app);