const app = require('./app');

const server = app.listen(8080, function(){
	console.log("Listening on port %s...", server.address().port);
});
