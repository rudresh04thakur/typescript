interface address{
	addre:string;
}
class BaseClass
{
	name:string;
	age:number
	constructor(n:string,a:number){
		this.name=n;
		this.age=a;	
	}
	method(msg?:any){
		console.log(msg);
		console.log(this.name,this.age);	
	}
}

class DerivedClass extends BaseClass implements address{
	addre:string;	
	constructor(a:string){
		super("Gopal",26);
		this.addre=a;	
	}
	method()
	{
		super.method("BaseClass");
		console.log("Derived Class");	
		console.log(this.addre);
	}
}

var d = new DerivedClass("Nanded");