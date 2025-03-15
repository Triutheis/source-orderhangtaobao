document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach((product, index) => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.style.animationDelay = `${index * 0.2}s`; // Hiệu ứng xuất hiện lần lượt
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <a href="https://zalo.me/admin-zalo-id" target="_blank" class="btn">Order</a>
                `;
                productList.appendChild(productItem);
            });
        })
        .catch(error => console.error('Lỗi tải sản phẩm:', error));
});