@import url("variables.css");
@import url("fonts.css");

/*==============================
RESET
==============================*/

*{
margin:0;
padding:0;
box-sizing:border-box;
-webkit-tap-highlight-color:transparent;
}

html{
scroll-behavior:smooth;
}

body{
background:var(--background);
color:var(--text);
font-family:var(--font-en);
overflow-x:hidden;
}

img{
max-width:100%;
display:block;
}

a{
text-decoration:none;
color:inherit;
}

button{
cursor:pointer;
border:none;
outline:none;
font-family:inherit;
transition:var(--transition);
}

input,
textarea,
select{
outline:none;
font-family:inherit;
}

ul{
list-style:none;
}

/*==============================
CONTAINER
==============================*/

.container{

width:min(100% - 24px,var(--container));

margin:auto;

}

/*==============================
HEADINGS
==============================*/

h1{
font-size:2rem;
font-weight:700;
}

h2{
font-size:1.6rem;
font-weight:700;
}

h3{
font-size:1.2rem;
font-weight:600;
}

p{
line-height:1.7;
color:var(--text-light);
}

/*==============================
SECTION
==============================*/

section{

padding:60px 0;

}

/*==============================
BUTTONS
==============================*/

.btn{

display:inline-flex;

align-items:center;

justify-content:center;

gap:10px;

padding:14px 26px;

background:var(--primary);

color:#fff;

border-radius:var(--radius-lg);

font-weight:600;

transition:var(--transition);

}

.btn:hover{

background:var(--primary-hover);

transform:translateY(-2px);

}

.btn-orange{

background:var(--secondary);

}

.btn-orange:hover{

opacity:.9;

}

/*==============================
CARD
==============================*/

.card{

background:#fff;

border-radius:var(--radius-xl);

box-shadow:var(--shadow-sm);

overflow:hidden;

transition:var(--transition);

}

.card:hover{

transform:translateY(-8px);

box-shadow:var(--shadow-md);

}/*========================================
HEADER
========================================*/

.header{

position:sticky;

top:0;

left:0;

width:100%;

height:var(--header-height);

background:var(--surface);

display:flex;

align-items:center;

z-index:999;

box-shadow:var(--shadow-sm);

}

.header .container{

display:flex;

align-items:center;

justify-content:space-between;

}

/*========================================
LOGO
========================================*/

.logo{

font-family:var(--font-logo);

font-size:32px;

color:var(--primary);

letter-spacing:1px;

user-select:none;

}

.logo span{

color:var(--secondary);

}

/*========================================
NAVIGATION
========================================*/

.nav{

display:flex;

align-items:center;

gap:28px;

}

.nav a{

font-size:15px;

font-weight:600;

color:var(--text);

transition:var(--transition);

position:relative;

}

.nav a:hover{

color:var(--primary);

}

.nav a.active{

color:var(--primary);

}

.nav a.active::after{

content:"";

position:absolute;

bottom:-8px;

left:0;

width:100%;

height:3px;

background:var(--primary);

border-radius:20px;

}

/*========================================
HEADER ACTION
========================================*/

.header-action{

display:flex;

align-items:center;

gap:15px;

}

/*========================================
SEARCH
========================================*/

.search-box{

width:280px;

height:46px;

background:#fff;

border:1px solid var(--border);

border-radius:999px;

display:flex;

align-items:center;

padding:0 16px;

}

.search-box input{

width:100%;

border:none;

background:transparent;

font-size:15px;

}

.search-box i{

color:var(--text-light);

font-size:18px;

}

/*========================================
ICON BUTTON
========================================*/

.icon-btn{

width:46px;

height:46px;

border-radius:50%;

display:flex;

align-items:center;

justify-content:center;

background:#fff;

border:1px solid var(--border);

font-size:20px;

position:relative;

transition:.3s;

}

.icon-btn:hover{

background:var(--primary);

color:#fff;

}

/*========================================
BADGE
========================================*/

.badge{

position:absolute;

top:-6px;

right:-6px;

width:22px;

height:22px;

background:var(--danger);

color:#fff;

display:flex;

align-items:center;

justify-content:center;

font-size:11px;

font-weight:700;

border-radius:50%;

}

/*========================================
PROFILE
========================================*/

.profile{

width:46px;

height:46px;

border-radius:50%;

overflow:hidden;

border:2px solid var(--primary);

}

.profile img{

width:100%;

height:100%;

object-fit:cover;

}

/*========================================
MOBILE MENU BUTTON
========================================*/

.menu-btn{

display:none;

font-size:28px;

cursor:pointer;

}

/*========================================
BOTTOM NAVIGATION
========================================*/

.bottom-nav{

display:none;

position:fixed;

left:0;

bottom:0;

width:100%;

height:70px;

background:#fff;

box-shadow:0 -5px 20px rgba(0,0,0,.08);

z-index:999;

}

.bottom-nav ul{

display:flex;

height:100%;

}

.bottom-nav li{

flex:1;

}

.bottom-nav a{

display:flex;

flex-direction:column;

align-items:center;

justify-content:center;

height:100%;

font-size:12px;

font-weight:600;

color:var(--text-light);

gap:5px;

transition:.3s;

}

.bottom-nav a i{

font-size:22px;

}

.bottom-nav a.active{

color:var(--primary);

}

/*========================================
RESPONSIVE
========================================*/

@media(max-width:991px){

.nav{

display:none;

}

.search-box{

display:none;

}

.menu-btn{

display:block;

}

.bottom-nav{

display:block;

}

body{

padding-bottom:70px;

}

}
/*========================================
HERO SECTION
========================================*/

.hero{

padding:40px 0;

}

.hero .container{

display:grid;

grid-template-columns:2fr 1fr;

gap:25px;

}

.hero-banner{

height:420px;

border-radius:24px;

overflow:hidden;

position:relative;

background:linear-gradient(135deg,#0B5FFF,#4F8CFF);

box-shadow:var(--shadow-md);

display:flex;

align-items:center;

padding:50px;

}

.hero-content{

max-width:520px;

color:#fff;

}

.hero-content h1{

font-size:52px;

line-height:1.15;

margin-bottom:18px;

}

.hero-content p{

color:#EEF4FF;

font-size:18px;

margin-bottom:25px;

}

.hero-image{

position:absolute;

right:20px;

bottom:0;

max-width:420px;

}

/*========================================
SIDE BANNER
========================================*/

.side-banner{

display:flex;

flex-direction:column;

gap:25px;

}

.offer-card{

height:197px;

background:#fff;

border-radius:22px;

padding:25px;

box-shadow:var(--shadow-sm);

display:flex;

flex-direction:column;

justify-content:center;

transition:.3s;

}

.offer-card:hover{

transform:translateY(-6px);

box-shadow:var(--shadow-md);

}

.offer-card h3{

font-size:22px;

margin-bottom:10px;

}

.offer-card span{

color:var(--secondary);

font-weight:700;

}

/*========================================
CATEGORY
========================================*/

.category{

padding:70px 0;

}

.category-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(150px,1fr));

gap:20px;

}

.category-card{

background:#fff;

border-radius:20px;

padding:25px;

text-align:center;

box-shadow:var(--shadow-sm);

transition:.3s;

cursor:pointer;

}

.category-card:hover{

background:var(--primary);

color:#fff;

transform:translateY(-8px);

}

.category-card img{

width:65px;

margin:auto;

margin-bottom:15px;

}

/*========================================
FLASH SALE
========================================*/

.flash-sale{

margin:60px 0;

background:linear-gradient(90deg,#FF7A00,#FFB347);

padding:22px;

border-radius:20px;

display:flex;

justify-content:space-between;

align-items:center;

color:#fff;

box-shadow:var(--shadow-md);

}

.flash-title{

font-size:28px;

font-weight:700;

}

.countdown{

display:flex;

gap:12px;

}

.time-box{

width:65px;

height:65px;

background:rgba(255,255,255,.2);

border-radius:16px;

display:flex;

align-items:center;

justify-content:center;

font-size:22px;

font-weight:700;

backdrop-filter:blur(10px);

}

/*========================================
PRODUCT GRID
========================================*/

.products{

padding:70px 0;

}

.product-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

gap:25px;

}

.product-card{

background:#fff;

border-radius:22px;

overflow:hidden;

box-shadow:var(--shadow-sm);

transition:.35s;

position:relative;

}

.product-card:hover{

transform:translateY(-10px);

box-shadow:var(--shadow-md);

}

.product-image{

height:240px;

overflow:hidden;

}

.product-image img{

width:100%;

height:100%;

object-fit:cover;

transition:.35s;

}

.product-card:hover img{

transform:scale(1.08);

}

.discount{

position:absolute;

top:15px;

left:15px;

background:var(--danger);

color:#fff;

padding:6px 12px;

border-radius:999px;

font-size:12px;

font-weight:700;

}

.product-info{

padding:18px;

}

.product-title{

font-size:18px;

font-weight:600;

margin-bottom:10px;

}

.price{

font-size:24px;

font-weight:700;

color:var(--primary);

}

.old-price{

margin-left:10px;

color:#9CA3AF;

text-decoration:line-through;

}

.product-footer{

display:flex;

justify-content:space-between;

align-items:center;

margin-top:18px;

}

/*========================================
MOBILE
========================================*/

@media(max-width:991px){

.hero .container{

grid-template-columns:1fr;

}

.hero-banner{

height:auto;

padding:30px;

}

.hero-content h1{

font-size:34px;

}

.hero-image{

display:none;

}

.flash-sale{

flex-direction:column;

gap:18px;

text-align:center;

}

}