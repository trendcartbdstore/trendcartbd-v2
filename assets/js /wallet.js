/*==========================================
WALLET SYSTEM
==========================================*/

const user =
JSON.parse(localStorage.getItem("trendcart_user"));

if(!user){
window.location.href="../login.html";
}

let users =
JSON.parse(localStorage.getItem("trendcart_users")) || [];

let withdraws =
JSON.parse(localStorage.getItem("trendcart_withdraw")) || [];

const currentUser = users.find(u=>u.phone===user.phone);

/*==========================================
LOAD WALLET
==========================================*/

function loadWallet(){

document.getElementById("balance").innerText =
"৳" + (currentUser.wallet || 0);

document.getElementById("totalEarn").innerText =
"৳" + (currentUser.wallet || 0);

let pending = withdraws
.filter(w=>w.phone===currentUser.phone && w.status==="Pending")
.reduce((a,b)=>a+b.amount,0);

document.getElementById("pending").innerText = "৳" + pending;

}

loadWallet();

/*==========================================
WITHDRAW REQUEST
==========================================*/

document.getElementById("withdrawBtn").onclick = ()=>{

let amount = parseFloat(document.getElementById("withdrawAmount").value);

if(!amount || amount <= 0){
alert("Enter valid amount");
return;
}

if(amount > (currentUser.wallet || 0)){
alert("Insufficient Balance");
return;
}

withdraws.push({

id: Date.now(),
phone: currentUser.phone,
amount: amount,
status: "Pending",
date: new Date().toLocaleString()

});

localStorage.setItem("trendcart_withdraw", JSON.stringify(withdraws));

alert("Withdraw Request Sent");

document.getElementById("withdrawAmount").value = "";

loadWallet();

};

/*==========================================
FIREBASE READY
==========================================*/

// Real-time wallet sync
// Auto approval system
// SMS notification
// Admin approval panel