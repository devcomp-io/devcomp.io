var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.end([
  	'<h1>Watch live and participate every Wednesday 10 am PST to 11 am PST!</h1>',
  	//'<h1><a href="http://t.co/xC3cZzFq4s">Participate!</a></h1>',
  	//'<iframe width="560" height="315" src="//www.youtube.com/embed/0w44qZiGMwk" frameborder="0" allowfullscreen></iframe>'
  ].join("\n"));

}).listen(process.env.PORT, '127.0.0.1');
console.log('Server running at http://127.0.0.1:' + process.env.PORT + '/');