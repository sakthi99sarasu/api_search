const db=require('mysql');

var con=db.createConnection(
{ 
    host:'localhost',
    user:'root',
    password:"",
    database:'searchengine'
});

con.connect(function(err){
    if(err){
        console.log(err);
    }else{console.log('Connected')}
});
module.exports=con;