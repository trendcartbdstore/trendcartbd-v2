/*==========================================
TREND CART BD
LOGIN SYSTEM
==========================================*/

const loginBtn=document.getElementById("loginBtn");

const email=document.getElementById("loginEmail");

const password=document.getElementById("loginPassword");

const togglePassword=document.getElementById("togglePassword");


/*==========================================
SHOW / HIDE PASSWORD
==========================================*/

if(togglePassword){

togglePassword.onclick=()=>{

if(password.type==="password"){

password.type="text";

togglePassword.className="fa-solid fa-eye-slash";

}else{

password.type="password";

togglePassword.className="fa-solid fa-eye";

}

};

}


/*==========================================
DEFAULT ACCOUNTS
(REMOVE AFTER FIREBASE)
==========================================*/

const accounts=[

{

email:"founder@trendcartbd.com",

phone:"01315121561",

password:"Founder@123",

role:"Founder",

page:"admin/dashboard.html"

},

{

email:"moderator@trendcartbd.com",

phone:"01700000000",

password:"Moderator@123",

role:"Moderator",

page:"admin/dashboard.html"

},

{

email:"affiliate@trendcartbd.com",

phone:"01800000000",

password:"Affiliate@123",

role:"Affiliate",

page:"affiliate/dashboard.html"

}

];


/*==========================================
LOGIN
==========================================*/

if(loginBtn){

loginBtn.onclick=()=>{

const user=email.value.trim();

const pass=password.value.trim();

if(user===""){

alert("Enter Email or Phone");

return;

}

if(pass===""){

alert("Enter Password");

return;

}

const account=accounts.find(acc=>

(acc.email===user || acc.phone===user)

&&

acc.password===pass

);

if(!account){

alert("Invalid Email / Phone / Password");

return;

}

localStorage.setItem(

"trendcart_user",

JSON.stringify(account)

);

alert("Welcome "+account.role);

window.location.href=account.page;

};

}


/*==========================================
AUTO LOGIN
==========================================*/

const session=

JSON.parse(localStorage.getItem("trendcart_user"));

if(session){

console.log("Logged In :",session.role);

}


/*==========================================
LOGOUT
==========================================*/

function logout(){

localStorage.removeItem("trendcart_user");

window.location.href="../login.html";

}


/*==========================================
AUTH GUARD
==========================================*/

function requireLogin(){

const user=

JSON.parse(localStorage.getItem("trendcart_user"));

if(!user){

window.location.href="../login.html";

}

}


/*==========================================
ROLE CHECK
==========================================*/

function hasRole(role){

const user=

JSON.parse(localStorage.getItem("trendcart_user"));

return user && user.role===role;

}


/*==========================================
FIREBASE READY
==========================================*/

// এখানে Firebase Authentication যোগ হবে
// Email Login
// Phone OTP Login
// Forgot Password
// Email Verification
// Session Management
// JWT Token
// Multi Device Login