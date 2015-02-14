var through = require('through'),
	split = require('split'),
	lineNo = 0;

process.stdin
	.pipe(split())
	.pipe(through(
		function(buffer) {
			var line = buffer.toString();
			this.queue(lineNo++ % 2 === 0 ? 
					line.toLowerCase() + '\n' : 
					line.toUpperCase() + '\n'
				);
		},
		function() {
			this.queue(null);
		}
	))
	.pipe(process.stdout);