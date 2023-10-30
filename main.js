const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('.shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleAsideShoppingCart);

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

    mobileMenu.classList.toggle('inactive')
}

function toggleAsideShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    asideShoppingCart.classList.toggle('inactive')
}

const productList = [];

productList.push({
    name: 'Racing bicycle',
    price: 170,
    image: 'https://images.unsplash.com/photo-1583227122027-d2d360c66d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80'
})
productList.push({
    name: 'Mountain Bike',
    price: 200,
    image: 'https://images.unsplash.com/photo-1583227122027-d2d360c66d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80'
})
productList.push({
    name: 'Bicycle touring',
    price: 150,
    image: 'https://images.unsplash.com/photo-1583227122027-d2d360c66d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80'
})
productList.push({
    name: 'Bicycle basket',
    price: 50,
    image: 'https://images.unsplash.com/photo-1583227122027-d2d360c66d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80'
})
productList.push({
    name: 'Helmet',
    price: 60,
    image: 'https://images.unsplash.com/photo-1583227122027-d2d360c66d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80'
})
productList.push({
    name: 'Lights',
    price: 30,
    image: 'https://images.unsplash.com/photo-1583227122027-d2d360c66d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80'
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
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
