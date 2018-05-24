class Person{
	name:string;
	age:number;
	desig:string;
	constructor(){}
	getInfo(name:string,desig:string="Dev",age?:number) {
		this.name=name;
		this.age= age || null ;
		this.desig=desig;
	}
	putInfo(){
		console.log("Name : " + this.name);
		console.log("Age : " + this.desig);
		console.log("Age : " + this.age);
	}
}
class Company extends Person{
	name:string;
	address:string;
	constructor(){
		super();
	}
	getComp(c:string,a:string){
		this.name=c;
		this.address=a;
	}
	putComp(){
		console.log("Company : "+ this.name);
		console.log("Address : "+ this.address);
	}
} 

var c = new Company();
c.getInfo("Gopal","Dev",27);
c.getComp("SevenMentor","FC Road");
c.putInfo();
c.putComp();