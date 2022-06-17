const { json } = require('express/lib/response');
const con = require('../db/db');
const productmodel=require('../models/model');

exports.retrieveproduct=(req,res)=>{

    const key=new productmodel({
        key_name :req.body.name,
        
    });
   // console.log(key);
    productmodel.retrieve(key,(err,data)=>{
        //console.log(data);
        if(err){
            res.json({Status:0, Message:"Can't Show the Details"} );

        }else{
            //var a=json({data});
            //console.log(a[0]);
           // console.log(json({data}));
            res.json({data});

        }
    });
}

exports.retrieveresult=(req,res)=>{

    const search=new productmodel({
        keyword :req.params.name,
        
    });
    //console.log(key);
    productmodel.retrieveresult(search,(err,data)=>{
      //  console.log(data);
        if(err){
            res.json({Status:0, Message:"Can't Show the Details"} );

        }else{
            //var a=json({data});
            //console.log(a[0]);
           // console.log(json({data}));
            res.json({data});

        }
    });
}
exports.login=(req,res)=>{
    
      var data=req.body;
      console.log(data);
     
        var username =data['username'];
       var password=data['password'];
       console.log(username =="satvat"&& password =="satvat@123");
    if(username =="satvat"&& password =="satvat@123")
    {
        res.json({Status:200});

        console.log('success');

    }else
    {
        res.json({Status:400});

        console.log('failed');

    }
     
      
        
  
    
    //console.log(key);
   
}