const db=require('mysql');

var con=db.createConnection(
{ 
    host:'localhost',
    user:'root',
    password:"",
    database:'project_search'
});

con.connect(function(err){
    if(err){
        console.log(err);
    }else{console.log('Connected')}
});
module.exports=con;