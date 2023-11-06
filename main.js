const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const asideShoppingCart = document.querySelector('.shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleAsideShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive');

    if (!isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive');

    if (!isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive')
}

function toggleAsideShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    asideShoppingCart.classList.toggle('inactive')
}

function displayInfoInProductDetail(event) {
    const productCard = event.target.closest('.product-card');
    if (!productCard) return; // Si no se hace clic en un producto, no hagas nada

    const selectedProduct = productList.find((product) => product.name === productCard.querySelector('div p:nth-child(2)').textContent);

    const productDetailImg = productDetailContainer.querySelector('img[id="product_detail_img"]');
    productDetailImg.setAttribute('src', selectedProduct.image);
    productDetailImg.setAttribute('alt', selectedProduct.name);

    const productDetailPrice = productDetailContainer.querySelector('p[id="product_detail_price"]');
    productDetailPrice.innerText = '$' + selectedProduct.price;

    const productDetailName = productDetailContainer.querySelector('p[id="product_detail_name"]');
    productDetailName.innerText = selectedProduct.name;

    productDetailContainer.classList.remove('inactive');
}

function openProductDetailAside(event) {
    
    displayInfoInProductDetail(event);

    desktopMenu.classList.add('inactive');
    asideShoppingCart.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Racing bicycle',
    price: 170,
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=1948&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})
productList.push({
    name: 'Mountain Bike',
    price: 200,
    image: 'https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?auto=format&fit=crop&q=80&w=1827&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})
productList.push({
    name: 'Bicycle touring',
    price: 150,
    image: 'https://images.unsplash.com/photo-1583227122027-d2d360c66d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80'
})
productList.push({
    name: 'Basket',
    price: 50,
    image: 'https://images.unsplash.com/photo-1541659298873-20f29dc26c0c?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})
productList.push({
    name: 'Helmet',
    price: 60,
    image: 'https://images.unsplash.com/photo-1601971360277-7b4c8aa60894?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})
productList.push({
    name: 'Lights',
    price: 30,
    image: 'https://images.unsplash.com/photo-1570106196361-2daac379ec3f?auto=format&fit=crop&q=80&w=1851&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productCartIcon = document.createElement('img');
        productCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productCartIcon);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
