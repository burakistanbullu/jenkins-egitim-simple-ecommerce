const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

const products = [
  { id: 1, name: 'T-shirt', price: 100 },
  { id: 2, name: 'Sneakers', price: 250 },
  { id: 3, name: 'Hat', price: 50 }
];

let cart = [];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/cart', (req, res) => {
  const product = products.find(p => p.id === req.body.id);
  if (product) {
    cart.push(product);
    res.json({ message: 'Product added to cart', cart });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.get('/api/cart', (req, res) => {
  res.json(cart);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
