/*==========================================
TREND CART BD
AFFILIATE + WALLET SYSTEM
==========================================*/

/*==========================================
USERS + ORDERS LOAD
==========================================*/

let users =
JSON.parse(localStorage.getItem("trendcart_users")) || [];

let orders =
JSON.parse(localStorage.getItem("trendcart_orders")) || [];

/*==========================================
COMMISSION SETTINGS (Founder Control)
==========================================*/

let commissionSettings =
JSON.parse(localStorage.getItem("trendcart_commission")) || {
rate:10 // default 10%
};

/*==========================================
GET AFFILIATE USER
==========================================*/

function getUserByPhone(phone){

return users.find(u=>u.phone===phone);

}

/*==========================================
PROCESS COMMISSION
==========================================*/

function processCommission(order){

const affiliateCode = order.customer.referral;

if(!affiliateCode) return;

const user = getUserByPhone(affiliateCode);

if(!user) return;

const total = parseFloat(order.total.replace("৳",""));

const commission = (total * commissionSettings.rate) / 100;

user.wallet = (user.wallet || 0) + commission;

localStorage.setItem("trendcart_users", JSON.stringify(users));

}

/*==========================================
RUN ALL ORDERS (SYNC)
==========================================*/

function syncCommissions(){

orders.forEach(order=>{

if(order.status === "Delivered" && !order.commissionDone){

processCommission(order);

order.commissionDone = true;

});

localStorage.setItem("trendcart_orders", JSON.stringify(orders));

}

}

/*==========================================
WITHDRAW REQUEST
==========================================*/

function requestWithdraw(userPhone, amount){

let withdraws =
JSON.parse(localStorage.getItem("trendcart_withdraw")) || [];

withdraws.push({

id: Date.now(),

phone: userPhone,

amount,

status:"Pending",

date:new Date().toLocaleString()

});

localStorage.setItem("trendcart_withdraw", JSON.stringify(withdraws));

alert("Withdraw Request Sent");

}

/*==========================================
UPDATE COMMISSION RATE (FOUNDER ONLY)
==========================================*/

function updateCommissionRate(newRate){

const admin =
JSON.parse(localStorage.getItem("trendcart_user"));

if(!admin || admin.role !== "Founder"){

alert("Only Founder Can Change Commission");

return;

}

commissionSettings.rate = newRate;

localStorage.setItem("trendcart_commission", JSON.stringify(commissionSettings));

alert("Commission Updated: "+newRate+"%");

}

/*==========================================
AFFILIATE LINK GENERATOR
==========================================*/

function generateAffiliateLink(phone){

return window.location.origin + "/shop.html?ref=" + phone;

}

/*==========================================
AUTO SYNC ON LOAD
==========================================*/

syncCommissions();

/*==========================================
FIREBASE READY
==========================================*/

// Real-time Wallet Update
// Affiliate Tracking System
// Commission Automation
// Withdraw Approval System
// Transaction History
// Admin Earnings Dashboard