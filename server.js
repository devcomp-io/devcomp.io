var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.end([
  	'<h1>Watch live and participate every Wednesday 10 am PST to 11 am PST!</h1>',
  	'<p>Join a group of people interested in collaborative realtime distributed system development and associated tooling.</p>',
  	'<p>More info: <a href="https://gist.github.com/cadorn/11326567">gist.github.com/cadorn/113265677</a></p>',
    '<p>Roadmap: <a href="https://github.com/devcomp-io/io.devcomp/blob/master/www/roadmap.md">github.com/devcomp-io/io.devcomp/blob/master/www/roadmap.md</a></p>',
    '<p>Mailing List: <a href="https://groups.google.com/forum/#!topic/devcomp-io">groups.google.com/forum/#!topic/devcomp-io</a></p>',
    '<h2>This Week (6)</h2>',
  	'<h1><a target="_blank" href="https://plus.google.com/events/c79u0u4bs71od2hab7a3g5amdv0">Google+ Event Page</a></h1>',
    '<h1><a target="_blank" href="https://groups.google.com/d/msg/devcomp-io/ddvyZ8j8Xes/1kdXF81tMugJ">Agenda</a></h1>',
//    '<h1>Participation link will show here close to 10 am PST so reload your page!</h1>',
//  	'<h1><a target="_blank" href="https://plus.google.com/hangouts/_/hoaevent/AP36tYfmJUvzsTUOpjrry_ELxPCa5P85cKdLLrRMi1cnnsvWWyjmFA?authuser=0&hl=en">Participate LIVE Now!</a></h1>',
  	'<iframe width="560" height="315" src="//www.youtube.com/embed/6v7_lyuFqjY" frameborder="0" allowfullscreen></iframe>',
    '<h2>Previous Weeks</h2>',
    '<p>Mailing List: <a href="https://github.com/devcomp-io/io.devcomp/blob/master/www/meeting.md">github.com/devcomp-io/io.devcomp/blob/master/www/meeting.md</a></p>'
  ].join("\n"));

}).listen(process.env.PORT, '127.0.0.1');
console.log('Server running at http://127.0.0.1:' + process.env.PORT + '/');

/*
    '<h1><a target="_blank" href="https://plus.google.com/events/c87smurg3b8nllrt3h7t9183ohs">Google+ Event Page</a></h1>',
    '<h1><a target="_blank" href="https://groups.google.com/d/msg/devcomp-io/M_G6Z1ViW7Q/LZCYIJPGOMEJ">Agenda</a></h1>',
//    '<h1>Participation link will show here close to 10 am PST so reload your page!</h1>',
//    '<h1><a target="_blank" href="https://plus.google.com/hangouts/_/hoaevent/AP36tYft2jVIiRKigv6LBDi7qGaNIidQ-Zk8ARtFHjCcZbp4S2L-4g?authuser=0&hl=en">Participate LIVE Now!</a></h1>',
    '<iframe width="560" height="315" src="//www.youtube.com/embed/kXYn5UfIiJU" frameborder="0" allowfullscreen></iframe>',
*/
