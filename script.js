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

<button>Add To Cart</button>

</div>

</div>

`;

});

}