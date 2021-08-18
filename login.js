// click button 
document.getElementById('button-click').addEventListener('click', function () {
//    console.log('buttonClick')
const loginEmail = document.getElementById('input-email')
const emailField =loginEmail.value;

// console.log(emailField);
const loginPassword =document.getElementById('input-password');
const passwordFiled =loginPassword.value;
// console.log(passwordFiled)
if (emailField == 'mahmud.mhb1@gmail.com' && passwordFiled == 'mahmud') {
    window.location.href ='banking.html';
}
})
