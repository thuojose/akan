let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let totalamount = document.querySelector('.price-bar')
let delivery = document.querySelector('.order-bar')
let price = document.querySelector('.order-bar')
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
// The order is stored here
var order = [];
var max_pizzas = large;
var orders = load_orders();
var delivery_price = 3.00;

var pizzas = [
  {name: 'Supermisso', price: 8.50, image: 'pizza-1.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-2.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-3.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-4.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-1.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-2.png'},
  {name: 'Supermisso', price: 8.50, image: 'pizza-3.png'},
  {name: 'Supermisso', price: 13.50, image: 'pizza-4.png'},
  {name: 'Supermisso', price: 13.50, image: 'pizza-1.png'},
  {name: 'Supermisso', price: 13.50, image: 'pizza-2.png'},
  {name: 'Supermisso', price: 13.50, image: 'pizza-3.png'},
  {name: 'Supermisso', price: 13.50, image: 'pizza-4.png'}
];


// Try and load orders from localStorage
function load_orders(){
  try {
    return JSON.parse(window.localStorage["orders"]);
  }
  catch (e) {
    return [];
  }
}

function save_order() {
  orders.push({pizzas: order, form: $('form').serializeArray()});

  save_orders();
}

function save_orders() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

function get_index_html(pizzas, delivery, show_delete) {
    order_html = "";

    total = 0.0;

    // Add Pizzas to the order
    for (var i = 0; i < pizzas.length; ++i) {
      pizza = pizzas[i];
      total += pizza.price;

      order_html += '<tr id="' + i + '"><th>' + pizza.name + '</th><td>$' + pizza.price.toFixed(2) + '</td>';
      if (show_delete) {
        index_html += '<td><button type="button" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button></td>';
      }
      index_html += '</tr>';
    }

    // Add Delivery to the order
    if (delivery) {
      total += delivery_price;
      index_html += '<tr><th>Delivery</th><td>$' + delivery_price.toFixed(2) + '</td></tr>';
    }

    // Add totalamount
    index_html += '<tr><th>Total</th><th>$' + total + '</th></tr>';

    return index_html;
}
