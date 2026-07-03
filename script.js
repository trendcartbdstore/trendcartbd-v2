const products = [

{
id:1,
name:"Portable Blender",
price:1290,
oldPrice:1690,
image:"https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600"
},

{
id:2,
name:"Mini Rechargeable Fan",
price:990,
oldPrice:1390,
image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600"
},

{
id:3,
name:"Motion Sensor Light",
price:790,
oldPrice:1190,
image:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600"
},

{
id:4,
name:"Phone Holder",
price:490,
oldPrice:690,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
}

];

const grid=document.querySelector(".grid");

if(grid){

products.forEach(product=>{

grid.innerHTML+=`

<div class="card">

<img src="${product.image}">

<div class="card-content">

<h3>${product.name}</h3>

<p>

<span class="price">৳${product.price}</span>

<span class="old-price">৳${product.oldPrice}</span>

</p>

<button onclick="addToCart(${product.id})">
🛒 Add To Cart
</button>

</div>

</div>

`;

});

}
// Flash Sale Countdown

let time=43200;

setInterval(()=>{

let h=Math.floor(time/3600);

let m=Math.floor((time%3600)/60);

let s=time%60;

const timer=document.getElementById("countdown");

if(timer){

timer.innerHTML=

`${h.toString().padStart(2,"0")} :

${m.toString().padStart(2,"0")} :

${s.toString().padStart(2,"0")}`;

}

if(time>0){

time--;

}

},1000);


// Dark Mode

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.style.position="fixed";

darkBtn.style.right="20px";

darkBtn.style.bottom="20px";

darkBtn.style.width="55px";

darkBtn.style.height="55px";

darkBtn.style.borderRadius="50%";

darkBtn.style.border="none";

darkBtn.style.background="#0b3ea9";

darkBtn.style.color="#fff";

darkBtn.style.fontSize="22px";

darkBtn.style.cursor="pointer";

darkBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

document.body.appendChild(darkBtn);

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

};
// =======================
// TREND CART BD CART
// =======================

let cart = JSON.parse(localStorage.getItem("trendcart")) || [];

function saveCart(){
    localStorage.setItem("trendcart", JSON.stringify(cart));
}

function addToCart(id){

    const product = products.find(p => p.id === id);

    const exist = cart.find(item => item.id === id);

    if(exist){

        exist.qty++;

    }else{

        cart.push({
            ...product,
            qty:1
        });

    }

    saveCart();

    updateCartCount();

    alert(product.name + " Added Successfully");
}

function updateCartCount(){

    const count=document.querySelector(".cart-count");

    if(!count) return;

    let total=0;

    cart.forEach(item=>{

        total+=item.qty;

    });

    count.innerHTML=total;

}

updateCartCount();