var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface Contact{
// 	//mobile:number;
// 	getCont(mb:number);
// 	putCont();
// }
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getInfo = function (name, desig, age) {
        if (desig === void 0) { desig = "Dev"; }
        this.name = name;
        this.age = age || null;
        this.desig = desig;
    };
    Person.prototype.putInfo = function () {
        console.log("Name : " + this.name);
        console.log("Age : " + this.desig);
        console.log("Age : " + this.age);
    };
    Person.prototype.superDemo = function () {
        console.log("Person Class");
    };
    return Person;
}());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Company.prototype.getComp = function (c, a) {
        this.name = c;
        this.address = a;
    };
    Company.prototype.putComp = function () {
        console.log("Company : " + this.name);
        console.log("Address : " + this.address);
        _super.prototype.superDemo.call(this);
    };
    Company.prototype.superDemo = function () {
        console.log("Company Class");
    };
    Company.prototype.getCont = function (mb) {
        this.mobile = mb;
    };
    Company.prototype.putCont = function () {
        console.log("Contact Number : " + this.mobile);
    };
    return Company;
}(Person));
var c = new Company();
c.getInfo("Gopal", "Dev", 27);
c.getComp("SevenMentor", "FC");
c.getCont(8983939246);
c.putInfo();
c.putComp();
c.putCont();
c.superDemo();
//console.log(c.mobile.instanceof(c))
