let cart = [];
let cartCount = 0;
let totalPrice = 0;

function addToCart(id, name, price) {
  const item = { id, name, price };
  cart.push(item);
  cartCount++;
  totalPrice += price;

  // Update cart count and total price in the UI
  document.getElementById('cart-count').innerText = cartCount;
  document.getElementById('total-price').innerText = totalPrice.toFixed(2);

  alert(`Your ${name} has been added to your cart.`);
}

function toggleCart() {
  const cartPopup = document.getElementById('cart');
  const cartItems = document.getElementById('cart-items');
  
  // Clear current cart items
  cartItems.innerHTML = '';
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `${item.name} = Rs.${item.price}`;
      cartItems.appendChild(cartItem);
    });
  }
  
  cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert(`Proceeding to checkout with a total of Rs.${totalPrice.toFixed(2)}.`);
  cart = [];
  cartCount = 0;
  totalPrice = 0;
  document.getElementById('cart-count').innerText = cartCount;
  document.getElementById('total-price').innerText = totalPrice.toFixed(2);
  toggleCart();
}
