interface InterfaceName{
	p1:string;
} 

class ClassName{
	a:number;
	b:number;	
	constructor(x:number,y:number){
		this.a=x;
		this.b=y;	
	}
	add(){		
		console.log(this.a+this.b);	
	}
}

class DerivedClassName extends ClassName implements InterfaceName{
	p:number;
	q:number;	
	p1:string; //interface implement
	constructor(m:number,n:number){
		super(10,23);
		this.p=m;
		this.q=n;	
		this.p1="10";
	}
	sub(){		
		console.log(this.p-this.q);
		console.log(this.p1);	
	}
}

var c = new DerivedClassName(20,23);
c.add();
c.sub();

