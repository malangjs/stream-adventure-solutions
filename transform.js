var through = require('through');

process.stdin.pipe(through(
	function(buffer) {
		this.queue(buffer.toString().toUpperCase());
	},
	function() {
		this.queue(null);
	}
)).pipe(process.stdout);