var app = require('./index');

module.exports = {
    createProduct: function(req, res){
      console.log(1111111, req.body);
        name = req.body.name;
        description = req.body.description;
        price = req.body.price;
        imageurl = req.body.imageurl;


        var db = app.get('db');

        db.create_product([name, description, price, imageurl],function(err){
            console.log(err);
        })
    }
}
