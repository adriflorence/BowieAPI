const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function (error, client) {
  if(error){
    console.log(error);
    return;
  }
  const db = client.db("bowiedb");
  console.log("Connected to db");
  // only if there's no error AND connected to db THE start

  server.post('/api/albums', function (req, res) {
    const albumCollection = db.collection('albums');
    const albumToSave = req.body;
    albumCollection.save(albumToSave, function (error, result) {
        if(error){
          console.log(error);
          res.status(500);
          res.send();
        }
        console.log('saved to database');
        res.status(201);
        res.json(result.ops[0]); // result object > operations property
    })
  });

  // FIND ALL ALBUMS
  server.get('/api/albums', function (req, res) {
    const albumCollection = db.collection('albums');
    albumCollection.find().toArray(function(error, allQuotes) {
      if(error){
        console.log(error);
        res.status(500);
        res.send();
      }
      res.json(allQuotes);
    })
  });

  // FIND ONE ALBUM
  server.get('/api/albums/:id', function (req, res) {
    const albumCollection = db.collection('albums');
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    albumCollection.findOne(filterObject, function(error, result) {
      if(error){
        console.log(error);
        res.status(500);
        res.send();
      }
      res.json(result);
      res.send();
    });
  });

  // DELETE MANY OBJECTS
  server.delete('/api/albums', function (req, res) {
    const albumCollection = db.collection('albums');
    albumCollection.deleteMany(function(error, result) {
      if(error){
        console.log(error);
        res.status(500);
        res.send();
      }
      res.status(201);
      res.json("all quotes have been deleted");
      res.json(result);
    });
  });

  // UPDATE ROUTE
  server.put('/api/albums/:id', function (req, res) {
    const albumCollection = db.collection('albums');
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    const updateData = req.body;
    albumCollection.update(filterObject, updateData, function(error, result) {
      if(error){
        console.log(error);
        res.status(500);
        res.send();
      }
      res.status(204); // 204 NO CONTENT
      res.json(result);
      res.send();
    });
  });

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});
