var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

var connectionString = "postgres://gesvntno:MbuIAoOJYdr1oUKcviiUy2vVhmC8w6n6@stampy.db.elephantsql.com:5432/gesvntno";

var massiveInstance = massive.connectSync({connectionString : connectionString})

app.set('db', massiveInstance);
var controller = require('./controller.js');
var productCtrl = require('./productCtrl.js');

controller.getPlanes();



app.post('/api/product',productCtrl.createProduct)




app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
