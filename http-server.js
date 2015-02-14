var http = require('http');
var through = require('through');

var server = http.createServer(function(req, res) {
	if (req.method === 'POST') {
		req.pipe(through(
			function(buffer) {
				this.queue(buffer.toString().toUpperCase());
			},
			function() {
				this.queue(null);
			}
		))
		.pipe(res);
	}

	else res.end('send me a POST\n');
});
server.listen(Number(process.argv[2]));