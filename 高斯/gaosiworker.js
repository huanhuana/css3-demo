importScripts('gaussBlur.js');
onmessage = function(e) {
	// this.dat = gaussBlur(e.data);
	postMessage(gaussBlur(gaussBlur(e.data)));
	// postMessage(this.dat);
	// console.log(this);
}