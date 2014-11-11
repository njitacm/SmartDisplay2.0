var express = require('express'),
	app = express();

app
	.use(express.static(__dirname + '/public/'))
	.get('*', function(req, res){
		res.sendFile('/public/index.html');
	})
	.listen(3000);

console.log("Server listening on port 3000");
