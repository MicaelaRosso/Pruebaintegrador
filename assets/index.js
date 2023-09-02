//Importo los dos contenedores principales
//El que contiene a las card, importo por clase y que contiene a los productos del carrito 

const productsContainer = document.querySelector('.products-container')
const productsCart = document.querySelector('.cart-container')
const total = document.querySelector('.total')
const categoriesContainer = document.querySelector('.categories');
const categoriesList = document.querySelectorAll('.category'); //Agarra a todos los botones de la lista
//const showMoreBtn = document.querySelector('.btn-load'); Es del botón ver mas
const buyBtn = document.querySelector('.btn-buy');
const cartBubble = document.querySelector('.cart-bubble');//Burbuja carro
const cartBtn = document.querySelector('.cart-label');//Boton de abrir y cerrar carrito
const menuBtn = document.querySelector('.menu-label');//Boton de abrir y cerrar menú
const cartMenu = document.querySelector('.cart'); //referencia al carrito en sí
const barsMenu = document.querySelector('.navbar-list');//Referencia al menú hamburguesa
const overlay = document.querySelector('.overlay');//Da una opacidad sobre la página y detecta el click fuera del carrito para cerrarlo
//const successModal = document.querySelector('.add-modal'); //Aparece cartel de compra exitosa, no está en html)
const deleteBtn = document.querySelector('.btn-delete');

// Productos guardados del usuario, si hay lo guarda, sino array vacio
let cart = JSON.parse(localStorage.getItem('cart')) || [];

//Creo la funcion generadora de las card

//El usó: const createProductTemplate

 const createCard= (product) => {
    const { id, name, description, price, cardImg } = product;
    return `
      <div class="product">
      <img src=${cardImg} alt=${name} />
      <div class="product-info">
  
          <div class="product-top">
              <h3>${name}</h3>
              
          </div>
  
          <div class="product-mid">
              <div class="product-description">
              <p>${description}</p>
              </div>
               </div>
  
  
          <div class="product-bot">
              <div class="product-price">
              <span>${price} Precio</span>
                  </div>
                  <button class="btn-add"
                  data-id='${id}'
                  data-name='${name}'
                  data-price='${price}'
                  data-description='${description}'
                  data-img='${cardImg}'>Comprar</button>
              </div>
          </div>
      </div>
  </div>`;
  };

  //Funcion para renderizar, inserto HTML, recibo una lista de productos y por cada producto se ejecuta la funcion de crear la card
  const renderProducts = (productList) => {
    productsContainer.innerHTML += productList
      .map(createCard)
      .join(''); //separa cada elementos del array
  };

  //Filtros--> Categorias

  // Fucnión estado de los botones de las categorias
  //Si el dataset tiene un valor dif de la categoria sellecionada remuevo la categoria "active"
const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesList]; //Lo convierto en un array
    categories.forEach((categoryBtn) => {
      if (categoryBtn.dataset.category !== selectedCategory) {
        categoryBtn.classList.remove('active');
        return;
      }
      categoryBtn.classList.add('active');
    });
  };

  //Función para cambiar el filtro activo, el que aprieta la persona.

  const changeFilterState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(appState.activeFilter);
    setShowMoreVisibility(appState.activeFilter);
  };
  
  //Función para saber si el elemento que se apretó es un boton de categoria y no esta activo
  //Si el boton que se apretó tiene la clase category y no tiene la clase active entonces devuelvo verdadero
const isInactiveFilterBtn = (element) => {
    return (
      element.classList.contains('category') && !element.classList.contains('active')
    );
  };
  
  //Funcion para aplicar el filtro al apretar el boton de la categoria
  const applyFilter = (event) => {
    const { target } = event;
    console.log(target);
    if (!isInactiveFilterBtn(target)) return;//Si toca un boton que ya está activo no hace nada
    productsContainer.innerHTML = '';
  
    changeFilterState(target)
    if (appState.activeFilter) {
      renderFilteredProducts();
      appState.currentProductsIndex = 0;
      return;
    }
  
    renderProducts(appState.products[0]);
  };

// Función para filtar los productos por categoría y renderizarlos
//Hago un array de los productos que el usuario tocó para filtrar. Categoria = filtro activo

const renderFilteredProducts = () => {
    const filteredProducts = productsRoyalBlends.filter(
      (product) => product.category === appState.activeFilter
    );
    renderProducts(filteredProducts);
  };

  // Menu interface

// Función para mostrar u ocultar el menu hamburguesa y el overlay

const toggleMenu = () => {
    barsMenu.classList.toggle('open-menu');
    if (cartMenu.classList.contains('open-cart')) {
      cartMenu.classList.remove('open-cart');
      return;
    }
    overlay.classList.toggle('show-overlay');
  };
  
  const toggleCart = () => {
    cartMenu.classList.toggle('open-cart');
    if (barsMenu.classList.contains('open-menu')) {
      barsMenu.classList.remove('open-menu');
      return;
    }
    overlay.classList.toggle('show-overlay');
  };


// Función para cerrar el menú hamburguewsa y el overlay cuando se hace click en un link

const closeOnClick = (e) => {
    if (!e.target.classList.contains('navbar-link')) return;
    barsMenu.classList.remove('open-menu');
    overlay.classList.remove('show-overlay');
  };
  
  //Función para cerrar el menú hamburguewsa y el overlay cuando se hace scroll
  const closeOnScroll = () => {
    if (
      !barsMenu.classList.contains('open-menu') &&
      !cartMenu.classList.contains('open-cart')
    )
      return;
  
    barsMenu.classList.remove('open-menu');
    cartMenu.classList.remove('open-cart');
    overlay.classList.remove('show-overlay');
  };
  
//Función para cerrar el menú hamburguewsa y el overlay cuando se hace click en el overlay
const closeOnOverlayClick = () => {
    barsMenu.classList.remove('open-menu');
    cartMenu.classList.remove('open-cart');
    overlay.classList.remove('show-overlay');
  };

  //_______________________________//

  const createCart = (cartProduct) => {
    const { id, name, price, cardImg } = cartProduct;
    return `    
      <div class="cart-item">
        <img src=${cardImg} alt="Imagen" />
        <div class="item-info">
          <h3 class="item-title">${name}</h3>
           <span class="item-price">${price} ETH</span>
        </div>
        <div class="item-handler">
          <span class="quantity-handler down" data-id=${id}>-</span>
          <span class="item-quantity">${quantity}</span>
          <span class="quantity-handler up" data-id=${id}>+</span>
        </div>
      </div>`;
  };
  
  // Función para renderizar los productos del carrito o el mensaje "No hay productos en el carrito"

const renderCart = () => {
    if (!cart.length) {
      productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
      return;
    }
    productsCart.innerHTML = cart.map(createCart).join('');
  };

  // función para obtener el total de la compra

const getCartTotal = () => {
    return cart.reduce(
      (accumulator, current) =>
        accumulator + Number(current.price) * current.quantity, 0);
  };
  
  // función para mostrar el total de la compra

const showCartTotal = () => {
    total.innerHTML = `${getCartTotal().toFixed(2)} eTH`;
  };
  
  // función para actualizar la burbuja de cantidad con el numero de productos en el carrito
  
  const renderCartBubble = () => {
    cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  };
  
  // función para habilitar o deshabilitar un boton segun corresponda

const disableBtn = (btn) => {
    if (!cart.length) {
      btn.classList.add('disabled');
    } else {
      btn.classList.remove('disabled');
    }
  };
  // IMPORTANTE: guardar el carrito en el localStorage !!
  //Para cuando se agreguen productos al carrito, si la persona se sale de la pagina, queden guardados
  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  // función para modificar el estado del carrito
  
  const updateCartState = () => {
    saveCart();
    renderCart();
    showCartTotal();
    disableBtn(buyBtn);
    disableBtn(deleteBtn);
    renderCartBubble();
  };
  
  // Función para crear un objeto con info del producto a agregar del carrito

const createProductData = ({ id, name, price, cardImg }) => {
    return {
      id,
      name,
      price,
      cardImg,
    };
  };
  
  //Función para saber si un producto ya existe en el carrito
  const isExistingCartProduct = (product) => {
    return cart.find((item) => item.id === product.id);
  };
  
  // Función para agregar una unidad a un producto que ya este en el el carrito
  const addUnitToProduct = (product) => {
    cart = cart.map((cartProduct) => cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct);
  };
  
  // Función para crear un objeto con la info del producto que se quiere agregar al carrito
  const createCartProduct = ( product) =>{
      cart = [...cart, {...product, quantity: 1}]
  }

  // Función para crear un objeto con la información del producto que se agrega al carrito
const addProduct = (e) => {
    if (!e.target.classList.contains('btn-add')) return;
    const product = createProductData(e.target.dataset);
    if (isExistingCartProduct(product)) {
      addUnitToProduct(product)
      /*showSuccessModal("Se agregó una unidad del producto al carrito")*/
    }else{
      createCartProduct(product)
     /* showSuccessModal("El producto se ha agregado al carrito")*/
    }
    updateCartState()
  };


  // Función para agregar mas de cada producto desde el carrito
  
  const handlePlusBtnEvent = (id) =>{
    const existingCartProduct = cart.find((item) => item.id === id)
    addUnitToProduct(existingCartProduct)
  }

  // Función para restar de cada producto del carrito
const handleMinusBtnEvent = (id) =>{
    const existingCartProduct = cart.find((item) => item.id === id)
  
    if(existingCartProduct.quantity === 1){
      if(window.confirm("¿Desea eliminar el producto del carrito?")){
        removeProductFromCart(existingCartProduct)
      }
      return; //por si no elimina el productip
    }
    subtractProductUnit(existingCartProduct) //sustrae una unidad 
  }
  
  // Función para remover un producto del carrito
  const removeProductFromCart = (product) =>{
    cart = cart.filter((item) => item.id !== product.id)
    updateCartState()
  }
  
    const subtractProductUnit = (product) =>{
  cart = cart.map((item) => {
    return item.id === product.id ?
    { ...item, quantity: Number(item.quantity) - 1 }
    : item
  });
  }
  
  // Función para manejar los eventos al apretar el botón mas o menos del item del carrito
  
  const handleQuantity = (e) => {
    if(e.target.classList.contains("down")){
      handleMinusBtnEvent(e.target.dataset.id)
    }else if (e.target.classList.contains("up")){
      handlePlusBtnEvent(e.target.dataset.id)
    }
  
    updateCartState()
  }
  
  // Función para vaciar el carrito
  const resetCartItems = () =>{
    cart = []
    updateCartState()
  }
  
  // Función para completar la compra o vaciar le carrito
  
  const completeCartAction = (confirmMsg, successMsg) =>{
    if(!cart.length) return;
    if(window.confirm(confirmMsg)){
      resetCartItems()
      alert(successMsg)
    }
  }
  
  // Función para disparar un mensaje de compra existosa
  const completeBuy = () =>{
    completeCartAction("¿Completar compra?", "¡Gracias por su compra!")
  }
  
  // Función para disparar el mensaje de vaciado exitoso del carrito
  const deleteCart = () =>{
    completeCartAction("¿Vaciar el carrito?", "¡Su carrito está vacío!")
  }
  
  const init = () =>{
    renderProducts(appState.products[0])
    showMoreBtn.addEventListener("click", showMoreProducts)
    categoriesContainer.addEventListener("click", applyFilter)
    cartBtn.addEventListener("click", toggleCart)
    menuBtn.addEventListener("click", toggleMenu)
    window.addEventListener("scroll", closeOnScroll)
    barsMenu.addEventListener("click", closeOnClick)
    overlay.addEventListener("click", closeOnOverlayClick)
    document.addEventListener("DOMContentLoaded", renderCart)
    document.addEventListener("DOMContentLoaded", showCartTotal)
    productsContainer.addEventListener("click", addProduct)
    productsCart.addEventListener("click", handleQuantity)
    buyBtn.addEventListener("click", completeBuy)
    deleteBtn.addEventListener("click", deleteCart)
    disableBtn(buyBtn)
    disableBtn(deleteBtn)
    renderCartBubble(cart)
  }
  
  
  init()