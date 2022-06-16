module.exports=app=>{
    var controller=require('../controller/controller');
    var router=require('express').Router();
    router.get('/retrieveresult/:name',controller.retrieveresult);
    router.get('/retrievedetails',controller.retrieveproduct);
    router.post('/login',controller.login);


    app.use('/search',router);
}