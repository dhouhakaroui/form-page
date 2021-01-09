function control() {
let email = document.querySelector(".email").value;
let password = document.querySelector(".psw").value;
let pswrepeat = document.querySelector(".psw-repeat").value;
let regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
console.log(password.length)
if (!regexEmail.test(email)) {
    alert("Please enter a email address!")
}
else if (password.length < 8) {
    alert('your password must have maximum 8 characters')
} 
else if (! /[0-9]+/.test(password)) {
    alert("your password has to contain at least one number")
}
else if (! /[a-z]+/.test(password)) {
    alert("your password has to contain at least one lowercase letter")
} 
else if (! /[A-Z]+/.test(password)) {
    alert("your password has to contain at least one uppercase letter")
} 
else if (pswrepeat!==password){
    alert('password must be equal')
}
else{
    alert('register success')
}
}