let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let totalamount = document.querySelector('.price-bar')
let delivery = document.querySelector('.order-bar')
let ordernow = document.querySelector('.order-bar')
let value = document.querySelector('.ordernow-bar')
menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();
// function to get totalAmount
function getTotalAmount() {
  for (let totalAmount of price){
    if (total.checked){
      return total.value;
    }
  }
}