/*==========================================
TREND CART BD
FORGOT PASSWORD
==========================================*/

const sendOtp=document.getElementById("sendOtp");

const resetPassword=document.getElementById("resetPassword");

let generatedOtp="";

/*==========================================
SEND OTP
==========================================*/

sendOtp.onclick=()=>{

const user=document.getElementById("user").value.trim();

if(user===""){

alert("Enter Email or Phone");

return;

}

generatedOtp=

Math.floor(100000+Math.random()*900000).toString();

alert(

"Demo OTP : "+generatedOtp

);

// Firebase OTP এখানে যোগ হবে

};

/*==========================================
RESET PASSWORD
==========================================*/

resetPassword.onclick=()=>{

const user=document.getElementById("user").value.trim();

const otp=document.getElementById("otp").value.trim();

const newPassword=document.getElementById("newPassword").value.trim();

if(otp!==generatedOtp){

alert("Invalid OTP");

return;

}

if(newPassword.length<6){

alert("Password Minimum 6 Characters");

return;

}

let users=

JSON.parse(

localStorage.getItem("trendcart_users")

)||[];

const index=users.findIndex(account=>

account.email===user ||

account.phone===user

);

if(index===-1){

alert("Account Not Found");

return;

}

users[index].password=newPassword;

localStorage.setItem(

"trendcart_users",

JSON.stringify(users)

);

alert(

"Password Reset Successful"

);

window.location.href="login.html";

};

/*==========================================
FIREBASE READY
==========================================*/

// Firebase Phone OTP
// Email OTP
// reCAPTCHA
// Password Reset Link
// SMS Gateway
// Email Gateway
// Multi Device Security