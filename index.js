
var resList=document.querySelector('.responsive-list')
var box1=document.querySelector('.box-1')
var box2=document.querySelector('.box-2')
var box3=document.querySelector('.box-3')
var box4=document.querySelector('.box-4')
var box5=document.querySelector('.box-5')
var box6=document.querySelector('.box-6')
var box7=document.querySelector('.box-7')
var box8=document.querySelector('.box-8')
var dress1=document.querySelector('.dress-1')
var dress3=document.querySelector('.dress-3')
var dress4=document.querySelector('.dress-4')
var clothBox1=document.querySelector('.cloth1-box')
var clothBox2=document.querySelector('.cloth2-box')
var clothBox3=document.querySelector('.cloth3-box')
var clothBox4=document.querySelector('.cloth4-box')
var clothText1=document.querySelector('.cloth1-text')
var clothText2=document.querySelector('.cloth2-text')
var clothText3=document.querySelector('.cloth3-text')
var clothText4=document.querySelector('.cloth4-text')
var rightBtn=document.querySelector('.right')
var leftBtn=document.querySelector('.left')
var shopBtn=document.querySelector('.shop-btn')
var shopDiv=document.querySelector('.shopping')
var categoryBtn=document.querySelector('.cloth-btn')
var closeBtn=document.querySelector('.close')
var xmark=document.querySelector('.xmark')
var responsiveList=document.querySelector('.responsive-list')
var homeBtn=document.querySelector('.home-btn')
var bar=document.querySelector('.bar')
let slideIndex = 0;
//Slides
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
//category
box2.onclick = function(){
  dress1.style.backgroundImage='url(./images/product-11-6.jpg)'
}
box1.onclick = function(){
  dress1.style.backgroundImage='url(./images/black.jpg)'
}
box3.onclick = function(){
  dress1.style.backgroundImage='url(./images/white.jpg)'
}
box4.onclick = function(){
  dress3.style.backgroundImage='url(./images/product-1-5.jpg)'
}
box5.onclick = function(){
  dress3.style.backgroundImage='url(./images/product-1.jpg)'
}
box6.onclick = function(){
  dress3.style.backgroundImage='url(./images/product-1-6.jpg)'
}
box7.onclick = function(){
  dress4.style.backgroundImage='url(./images/product-15.jpg)'
}
box8.onclick = function(){
  dress4.style.backgroundImage='url(./images/product-15-6.jpg)'
}
rightBtn.onclick = function(){
  clothBox1.style.backgroundImage='url(./images/category-6.jpg)'
  clothText1.innerText='Outerwear'
  clothBox2.style.backgroundImage='url(./images/category-1.jpg)'
  clothText2.innerText='Clothing'
  clothBox3.style.backgroundImage='url(./images/category-2.jpg)'
  clothText3.innerText='Dresses'
  clothBox4.style.backgroundImage='url(./images/category-3.jpg)'
  clothText4.innerText='Shoes'
}
leftBtn.onclick = function(){
  clothBox1.style.backgroundImage='url(./images/category-2.jpg)'
  clothText1.innerText='Dresses'
  clothBox2.style.backgroundImage='url(./images/category-3.jpg)'
  clothText2.innerText='Shoes'
  clothBox3.style.backgroundImage='url(./images/category-4.jpg)'
  clothText3.innerText="Bags"
  clothBox4.style.backgroundImage='url(./images/category-9.jpg)'
  clothText4.innerText='Hats'
}
//Shop
shopBtn.onclick = function(){
  shopDiv.style.display='block'
  shopDiv.style.display='flex'
  shopDiv.style.display='justify-content: space-evenly'
  shopDiv.style.display='align-items: center;'
  closeBtn.style.display='block'
}
closeBtn.onclick = function(){
  shopDiv.style.display='none'
}
categoryBtn.onclick = function(){
  shopDiv.style.display='block'
  shopDiv.style.display='flex'
  shopDiv.style.display='justify-content: space-evenly'
  shopDiv.style.display='align-items: center;'
  closeBtn.style.display='block'
}
homeBtn.onclick = function(){
  shopDiv.style.display='block'
  shopDiv.style.display='flex'
  shopDiv.style.display='justify-content: space-evenly'
  shopDiv.style.display='align-items: center;'
  closeBtn.style.display='block'
}
//Responsive menu
bar.onclick = function(){
    responsiveList.style.display="inline-block"
    responsiveList.style.transition="1s all"
    responsiveList.style.display='flex'
}
xmark.onclick = function(){
    responsiveList.style.display='none'
}