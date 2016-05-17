var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/simple-api');
var contactSchema = require('../models/contact');


//Controller dealing with requests to do with contact alteration
var contactController = function(app){

  //get contact info
  app.get('/contact/:username', function(req, res, next){

    contactSchema.find({ username: req.params.username }, function(err, contact) {
      if (err) throw err;

      res.send(contact);
    });

  });

  //get all contacts and info
  app.get('/contacts',function(req, res, next){

    contactSchema.find({}, function(err, contacts) {
      if(err) throw err;

      res.send(contacts);
    });

  });

  //create contact
  app.post('/contact/create',function(req, res, next){

    var newContact = new contactSchema({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      admin: req.body.admin,
      email: req.body.email,
      mobile: req.body.mobile,
      location: req.body.location
    });

    newContact.save(function(err) {
      if(err) throw err;

      res.send("Success");
    });

  });

  //update contact details
  app.post('/contact/update',function(req, res, next){

    contactSchema.findOneAndUpdate(
      { username: req.body.username },
      { name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        location: req.body.location },
      function(err, contact) {
        if (err) throw err;

        res.send("Success");
    });

  });

  //delete contact
  app.post('/contact/delete',function(req, res, next){

    contactSchema.findOneAndRemove({ username: req.body.username }, function(err) {
      if (err) throw err;

      res.send("Success");
    });

  });

};

module.exports = contactController;
