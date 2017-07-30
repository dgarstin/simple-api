const contactController = function(app){

  app.get('/contacts',function(req, res, next){
    res.json({user : "Daniel Garstin"});
  });

};

module.exports = contactController;
