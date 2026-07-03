/*==========================================
TREND CART BD
ADMIN PANEL
==========================================*/

const admin =
JSON.parse(localStorage.getItem("trendcart_user"));

/*==========================================
AUTH CHECK
==========================================*/

if(!admin){

window.location.href="../login.html";

}

const allowRoles=[
"Founder",
"Moderator",
"Affiliate"
];

if(!allowRoles.includes(admin.role)){

alert("Access Denied");

window.location.href="../login.html";

}

/*==========================================
LOAD ADMIN INFO
==========================================*/

const adminName=document.getElementById("adminName");

if(adminName){

adminName.innerHTML=admin.name || admin.role;

}

/*==========================================
STATISTICS
==========================================*/

const users=
JSON.parse(localStorage.getItem("trendcart_users"))||[];

const orders=
JSON.parse(localStorage.getItem("trendcart_orders"))||[];

const products=
JSON.parse(localStorage.getItem("trendcart_products"))||[];

document.getElementById("totalUsers").innerHTML=users.length;

document.getElementById("totalOrders").innerHTML=orders.length;

document.getElementById("totalProducts").innerHTML=products.length;

/*==========================================
ROLE PERMISSION
==========================================*/

const permission={

Founder:[
"*"
],

Moderator:[

"dashboard",

"products",

"orders",

"billing",

"customers",

"transactions"

],

Affiliate:[

"dashboard",

"upload",

"promotion",

"commission"

]

};

/*==========================================
CHECK PERMISSION
==========================================*/

function canAccess(module){

if(admin.role==="Founder"){

return true;

}

return permission[admin.role].includes(module);

}

/*==========================================
ROLE NAME
==========================================*/

const roleName={

Founder:"মিস্কিনের বাদশাহ বন্দে আলি মিয়া",

Moderator:"রাজা লাল ফকির মন্ডল",

Affiliate:"পাছা লাল শুধু সেল"

};

/*==========================================
FOUNDER ONLY
ROLE RENAME
==========================================*/

function changeRoleName(role,newName){

if(admin.role!=="Founder"){

alert("Only Founder Can Change Role Name");

return;

}

roleName[role]=newName;

localStorage.setItem(

"trendcart_roles",

JSON.stringify(roleName)

);

alert("Role Updated");

}

/*==========================================
LOAD CUSTOM ROLE
==========================================*/

const customRole=

JSON.parse(localStorage.getItem("trendcart_roles"));

if(customRole){

Object.assign(roleName,customRole);

}

/*==========================================
LOGOUT
==========================================*/

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.onclick=()=>{

if(confirm("Logout?")){

localStorage.removeItem("trendcart_user");

window.location.href="../login.html";

}

};

}

/*==========================================
SYSTEM INFO
==========================================*/

console.log("Trend Cart BD Admin Loaded");

console.log("Role :",admin.role);

console.log("Permissions :",permission[admin.role]);

/*==========================================
FIREBASE READY
==========================================*/

// Firestore Admin Collection
// Realtime Dashboard
// Product CRUD
// Order CRUD
// Analytics
// Role Sync
// Affiliate Commission
// Wallet Management
// Push Notification
// Audit Log
// Activity History