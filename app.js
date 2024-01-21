const products = [
  { id: 1, name: 'Product N', price: 250 },
  { id: 2, name: 'Product V', price: 210 },
  { id: 3, name: 'Product C', price: 500 }
];

let currentUser = null;

function login() {
  const username = prompt('Enter your username:');
  currentUser = username;
  console.log(`Welcome, ${currentUser}!`);
}

function viewProducts() {
  console.log("Available Products:");
  products.forEach(product => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
}

function viewProduct(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    console.log(`Product Details: ${product.name} - $${product.price}`);
  } else {
    console.log("Product not available, check similar products.");
  }
}

function buyProduct(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    console.log(`Congratulations, ${currentUser}! You've purchased ${product.name} for $${product.price}.`);
  } else {
    console.log('Product not available, check similar products.');
  }
}

