const fs = require('fs');
fs.watch('target.txt', function(){
	console.log('File target.tx just changed!');
})

console.log('now watching target.txt for changes...');
