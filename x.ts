interface xyz{
	p:number;
}

class abc implements xyz{
	p:number;
	constructor(){
		this.p=10;
		console.log(this.p);	
	}
} 

var c = new abc();

