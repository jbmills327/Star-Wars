var express = require('express'), 
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    logger = require('morgan')('dev'), 
    mongoose = require('mongoose');



var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


routes(app);


app.listen(PORT, (err)=>{
    if(err){
        console.log('This is the error', err);
    }

    console.log('Server is up and running on port ', PORT);
})