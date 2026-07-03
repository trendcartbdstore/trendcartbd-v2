/*==========================================
TREND CART BD
CUSTOMER DASHBOARD
==========================================*/

const currentUser=
JSON.parse(localStorage.getItem("trendcart_user"));

/*==========================================
LOGIN CHECK
==========================================*/

if(!currentUser){

window.location.href="../login.html";

}

/*==========================================
LOAD PROFILE
==========================================*/

const customerName=document.getElementById("customerName");
const wallet=document.getElementById("wallet");
const orders=document.getElementById("orders");
const wishlist=document.getElementById("wishlist");

if(customerName){

customerName.innerHTML=currentUser.name||"Customer";

}

if(wallet){

wallet.innerHTML="৳"+(currentUser.wallet||0);

}

/*==========================================
ORDER COUNT
==========================================*/

let allOrders=
JSON.parse(localStorage.getItem("trendcart_orders"))||[];

const myOrders=

allOrders.filter(order=>

order.customer.phone===currentUser.phone ||

order.customer.email===currentUser.email

);

orders.innerHTML=myOrders.length;

/*==========================================
WISHLIST COUNT
==========================================*/

let wish=

JSON.parse(localStorage.getItem("trendcart_wishlist"))||[];

wishlist.innerHTML=wish.length;

/*==========================================
RECENT ORDER
==========================================*/

if(myOrders.length){

console.log("Latest Order :",myOrders.at(-1));

}

/*==========================================
PROFILE UPDATE
==========================================*/

function updateProfile(data){

Object.assign(currentUser,data);

localStorage.setItem(

"trendcart_user",

JSON.stringify(currentUser)

);

}

/*==========================================
LOGOUT
==========================================*/

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.onclick=()=>{

if(confirm("Logout Now?")){

localStorage.removeItem("trendcart_user");

window.location.href="../login.html";

}

};

}

/*==========================================
NOTIFICATION
==========================================*/

function notify(message){

alert(message);

}

/*==========================================
FIREBASE READY
==========================================*/

// Firebase Auth Session
// Firestore Customer Profile
// Real-time Orders
// Wallet Sync
// Notifications
// Device Login History
// Cloud Storage Profile Image
// Customer Analytics