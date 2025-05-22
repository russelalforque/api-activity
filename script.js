const productList = document.getElementById('product-list');

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    const products = data.products;

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" class="product-image" />
        <div class="product-title">${product.title}</div>
        <div class="product-details">
          <p><strong>Brand:</strong> ${product.brand}</p>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Rating:</strong> ${product.rating}</p>
        </div>
        <div class="product-price">$${product.price}</div>
      `;

      productList.appendChild(card);
    });
  })
  .catch(error => {
    productList.innerHTML = `<p>Error fetching products: ${error.message}</p>`;
  });
