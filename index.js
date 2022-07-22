
//const something =require(somelibrary);
const express = require('express');

const app = express();
require('dotenv').config();       //env import

app.use(express.json());     //read json data
const {body, validationResult} = require('express-validator');      

//app.method(actual arguments);
app.post('/',body('email').isEmail(),

body('password').isLength({ min: 5 }),

(req,res)=>{
    
    const errors = validationResult(req);
    //if,else for condition
    if(!errors.isEmpty()){

        res.status(400).json({
            "err":errors.array()
        });
    }

    console.log(errors);
    console.log(req.body);

    res.json({
        msg:"hello",
        "email":req.body.email,
        "password":req.body.password
    })
} );

let port = process.env.PORT ||4000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});