const db=require('../db/db');

const promodel=function(productmodel)

{
    this.keyword=productmodel.keyword;
    // this.product_id=productmodel.product_id;
    // this.product_name=productmodel.product_name;
    // this.product_price=productmodel.product_price;
    // this.product_image=productmodel.product_image;
    
}

//retrieve the data
promodel.retrieveresult=(value ,result)=>{
    var sqlQuery = `SELECT * FROM keyword_data WHERE 
    category ="${value.keyword}" OR 
    sname1 ="${value.keyword}" OR 
    balance_number = "${value.keyword}" OR 
    elemination_number ="${value.keyword}" OR 
    sub_category ="${value.keyword}" ` ;
    db.query(sqlQuery,(err,res)=>{
        //console.log(res);
        if(err){
            console.log(err);
        }else{
            //console.log(res);
            result(null,res);
        }
    });
    
}

promodel.retrieve=(value ,result)=>{
    var sqlQuery = `SELECT * FROM keyword_data  `;
    db.query(sqlQuery,(err,res)=>{
        //console.log(res);
        if(err){
            console.log(err);
        }else{
            //console.log(res);
            result(null,res);
        }
    });
    
}

module.exports=promodel;