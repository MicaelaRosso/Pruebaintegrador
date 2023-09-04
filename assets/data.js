const productsData = [
  {
    id: 1,
    name: "Blend Té Carrot Cake",
    bid: 450.00,
    user: "thetroncous",
    category: "BlendTe",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/tecarrot.jpg"
  },
  {
    id: 2,
    name: "Blend Té Jardines de Cuzco",
    bid: 300.00,
    user: "kirik8",
    category: "BlendTe",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/tejardines.jpg",
  },
  {
    id: 3,
    name: "Blend Té Leña Alemana",
    bid: 350.00,
    user: "FD10S",
    category: "BlendTe",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/teleña.jpg",
  },
  {
    id: 4,
    name: "Topping Folclore del Norte",
    bid: 500.00,
    user: "Urastream",
    category: "ToppingMate",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/BlendFolclore.png",
  },
  {
    id: 5,
    name: "Topping Olor a café de Bogotá",
    bid: 430,
    user: "Gulineta",
    category: "ToppingMate",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/BlendCafe.png",
  },
  {
    id: 6,
    name: "Topping Zamba de la Qubrada",
    bid: 450.00,
    user: "HardBena",
    category: "ToppingMate",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/BlendZamba.png",
  },
  {
    id: 7,
    name: "Gin Tonic Buey de Australia",
    bid: 380.00,
    user: "ThingyCake",
    category: "BlendGinTonic",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/BlendBuey.png",
  },
  {
    id: 8,
    name: "Gin Tonic Lince del Amazonas",
    bid: 525.00,
    user: "NickyG",
    category: "BlendGinTonic",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/BlendLince.png",
  },
  {
    id: 9,
    name: "Gin Tonic Tucán de Iryapú",
    bid: 525.00,
    user: "ThingyBit",
    category: "BlendGinTonic",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/BlendTucan.png",
  },
  {
    id: 10,
    name: "Combo Blends x4",
    bid: 1890.00,
    user: "LilKenny",
    category: "BlendGinTonic",
    userImg: "./assets/img/user.png",
    cardImg: "./assets/img/BlendTodos.png",
  },
 
];

  //______________________//

  //PARA BOTON VER MÀS
  //Funcion dividir los productos

  const divideProductsInParts = (size) => {
    // retornar la lista de productos
    let productsList = []
    // 0 - 6 - 12
    for (let i = 0; i < productsData.length; i+= size) {
      // Voy a cortar cada elemento y agregar cada corte el product list
      productsList.push(productsData.slice(i,i + size))
      }
    return productsList;
  }
  
//______________________//

//Estado de aplicación:
const appState = {                             //  0                     1              2
  products: divideProductsInParts(3), // [ [{},{},{},{},{}] , [{},{},{},{},{}], [{},{},{},{},{}]] 3
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(9).length, // 3
  activeFilter: null
};
  
