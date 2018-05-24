var x = function(a,b,c){
	console.log(eval(a+c+b));	
	}
console.time("Execution_time:");
x(2,5,"/");
console.timeEnd("Execution_time:");