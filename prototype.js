function User(name, email) {
    this.name = name;
    this.email = email;

}
let userdetails=new User("shashi","Shashi@gmail.com");
User.prototype.login=function(){
    console.log(this.name + " has logged in.");
}
Object.login();