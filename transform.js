var through = require('through');

process.stdin.pipe(through(
	function write(buffer) {
		this.queue(buffer.toString().toUpperCase());
	},
	function end() {
		this.queue(null);
	}
)).pipe(process.stdout);