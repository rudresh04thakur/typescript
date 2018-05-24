// interface Contact{
// 	//mobile:number;
// 	getCont(mb:number);
// 	putCont();
// }
class Person{
	name:string;
	age:number;
	desig:string;
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
	superDemo(){
		console.log("Person Class");
	}
}
class Company extends Person {//implements Contact{
	name:string;
	address:string;
	mobile;
	getComp(c:string,a:string){
		this.name=c;
		this.address=a;
	}
	putComp(){
		console.log("Company : "+ this.name);
		console.log("Address : "+ this.address);
		super.superDemo();
	}
	superDemo(){
		console.log("Company Class");
	}
	getCont(mb:number){
		this.mobile=mb;
	}
	putCont(){
		console.log("Contact Number : " + this.mobile);
	}
} 

var c = new Company();
c.getInfo("Gopal","Dev",27);
c.getComp("SevenMentor","FC");
c.getCont(8983939246);
c.putInfo();
c.putComp();
c.putCont();
c.superDemo();
//console.log(c.mobile.instanceof(c))