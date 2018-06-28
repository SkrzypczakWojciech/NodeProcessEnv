process.stdin.setEncoding('utf-8');
process.stdout.write('Hello,chose 1 or 2')
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
   		switch(instruction){
   			case "1":
   				process.stdout.write('you chose 1'+ "<br>")
   				break;
   			case "2":
   				console.log(process.env)
   				break;
   			default:
   				process.stdout.write('type something else' + "<br>")
   				break;
   		}
    }
});