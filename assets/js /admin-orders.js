/*==========================================
ADMIN ORDER MANAGEMENT
==========================================*/

let orders =
JSON.parse(localStorage.getItem("trendcart_orders")) || [];

const list = document.getElementById("ordersList");

/*==========================================
RENDER ORDERS
==========================================*/

function renderOrders(){

if(!list) return;

list.innerHTML = "";

if(orders.length === 0){

list.innerHTML = `

<div class="card" style="padding:30px;text-align:center;grid-column:1/-1;">
<h2>No Orders Found</h2>
</div>

`;

return;

}

orders.forEach((order, index)=>{

list.innerHTML += `

<div class="feature-card">

<h3>Order ID</h3>
<p>${order.orderId}</p>

<hr>

<h4>Customer</h4>
<p>${order.customer.name}</p>
<p>${order.customer.phone}</p>

<hr>

<h4>Payment</h4>
<p>${order.payment}</p>

<h4>Total</h4>
<p>${order.total}</p>

<h4>Status</h4>
<p><b>${order.status}</b></p>

<div style="margin-top:15px;display:flex;gap:10px;flex-wrap:wrap;">

<button class="btn" onclick="updateStatus(${index}, 'Processing')">Processing</button>

<button class="btn btn-orange" onclick="updateStatus(${index}, 'Shipped')">Shipped</button>

<button class="btn" onclick="updateStatus(${index}, 'Delivered')">Delivered</button>

<button class="btn btn-orange" onclick="deleteOrder(${index})">Delete</button>

</div>

</div>

`;

});

}

renderOrders();

/*==========================================
UPDATE STATUS
==========================================*/

function updateStatus(index, status){

orders[index].status = status;

localStorage.setItem("trendcart_orders", JSON.stringify(orders));

renderOrders();

}

/*==========================================
DELETE ORDER
==========================================*/

function deleteOrder(index){

if(confirm("Delete this order?")){

orders.splice(index, 1);

localStorage.setItem("trendcart_orders", JSON.stringify(orders));

renderOrders();

}

}

/*==========================================
FIREBASE READY
==========================================*/

// Firestore Orders Collection
// Real-time Order Tracking
// SMS Notification
// Email Notification
// Delivery API Integration
// Courier API Sync