var data = '<div class="section section-1">'+
'<ul>'+
'<li><a href="../home/index.html">home.</a></li>'+
'<li><a href="../components/pcComponents.html">pc components.</a></li>'+
'<li><a href="../accessories/pcAccessories.html">pc accessories.</a></li>'+
'<li><a href="../laptops/laptops.html">laptops.</a></li>'+
'</ul>'+
'</div>'+
'<div class="dropdownSection">'+
'<div class="dropdownWrapper">'+
'<button class="dropdownButton">'+
'<img src="../pictures/dropdown.png" />'+
'</button>'+
'<div class="dropdownOptions">'+
'<a href="../home/index.html">♦ home</a>'+
'<a href="../components/pcComponents.html">♦ pc components</a>'+
'<a href="../accessories/pcAccessories.html">♦ pc accessories</a>'+
'<a href="../laptops/laptops.html">♦ laptops</a>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="section section-2">'+
'<img src="../pictures/MrPC_Logo_1000x1000.png" alt="Mr.PC logo" />'+
'</div>'+
'<div class="section section-3">'+
'<ul>'+
'<li class="search">'+
'<img src="../pictures/searchIcon.png" alt="search icon" />'+
'<span>search</span>'+
'</li>'+
'<li class="cart">'+
'<img src="../pictures/cartIcon.png" alt="cart icon" />'+
'<span>cart</span>'+
'</li>'+
'<li class="account">'+
'<img src="../pictures/userIcon.png" alt="account icon" />'+
'<span>account</span>'+
'</li>'+
'</ul>'+
'</div>';

$(document).ready(function () {
    $('.header').html(data);
});

function redirect() {
    window.location.href = '/components/pcComponents.html';
}