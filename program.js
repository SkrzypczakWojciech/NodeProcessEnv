process.stdin.setEncoding('utf-8');
process.stdout.write('Hello,chose 1,2,3 or /exit' + '\n')
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
   		switch(instruction){
   			case '1':
   				process.stdout.write('you chose 1'+ '\n')
   				break;
   			case '2':
   				console.log(process.env.lang)
   				break;
   			case '3':
   				console.log(process.versions.node)
   				break;
   			  case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
   				break;
   			default:
   				process.stdout.write('type something else' + '\n')
   				break;
   		}
    }
});