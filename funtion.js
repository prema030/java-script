//function
// code reusablity
function add() {
    var a = 57;
    var b = 78;
    console.log(a+b);
   document.write(a+b);
}
add();
//ES6
//way2 of using function
const sub = () => {
     var a = 67;
    var b = 82;
    console.log(a - b);
    document.write(a - b);

};
sub();
//hosting - to declare(move) the variable to the top.
function demo(){
    let name = "prema";
    document.write("Hello, my name is ${name}");
}
demo();
