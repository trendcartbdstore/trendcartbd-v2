/*==========================================
ANALYTICS SYSTEM
==========================================*/

let orders =
JSON.parse(localStorage.getItem("trendcart_orders")) || [];

let totalSales = 0;

orders.forEach(o=>{

totalSales += parseFloat(o.total.replace("৳",""));

});

document.getElementById("totalSales").innerText = "৳"+totalSales;

document.getElementById("totalOrders").innerText = orders.length;

/* simple profit estimate */

let profit = totalSales * 0.25;

document.getElementById("totalProfit").innerText = "৳"+profit;

/*==========================================
FIREBASE READY
==========================================*/

// Real revenue tracking
// Product-wise analytics
// User behavior tracking
// Daily / Monthly chart