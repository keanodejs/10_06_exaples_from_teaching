var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/store';

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    var obj = {
        name: '',
        title: '',

        getInfo: function() {
            return this.name + ' ' + this.title;
        }
    }

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('users');

        collection.findOne({ 'name': 'xxx' }, function(err, data) {
            obj.name = data.name;
            obj.title = data.email;

            res.render('about', obj);
        })
    });

    
});

app.listen(3000);
