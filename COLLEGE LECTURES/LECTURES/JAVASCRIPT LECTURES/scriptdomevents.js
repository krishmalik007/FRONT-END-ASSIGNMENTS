
var btns = document.querySelectorAll("button");
for(btn of btns) {
btn.addEventListener("click",myfunc);  
btn.addEventListener("click",hello);    
}
function myfunc() {
    console.log("Button Pressed");
};
function hello() {
    console.log("HELLOoooooo....");
};