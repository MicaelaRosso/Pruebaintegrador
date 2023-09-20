const productsData = [
  {
    id: 1,
    name: "Blend Té Carrot Cake en Disney",
    bid: 450.00,
    description: "Hebras de té rojo, baby carrots y canela en rama, con el dulce sabor clásico del pastry americano.",
    category: "BlendTe",
    cardImg: "./assets/img/tecarrot.jpg"
  },
  {
    id: 2,
    name: "Blend Té Jardines de Cuzco",
    bid: 300.00,
    description: "Té verde color Machu Pichu, flores de manzanilla y flores de caléndula, muy floral, herval y liviano.",
    category: "BlendTe",
    cardImg: "./assets/img/tejardines.jpg",
  },
  {
    id: 3,
    name: "Blend Té Leña de Árbol Alemán",
    bid: 350.00,
    description: "Aromas amaderados entre árboles nevados. Té negro, malta caramelo, humo natural.",
    category: "BlendTe",
    cardImg: "./assets/img/teleña.jpg",
  },
  {
    id: 4,
    name: "Topping Folclore del Norte Argentino",
    bid: 500.00,
    description: "Té Verde, Cedrón y Manzanilla. Contribuye al alivio del estrés y la ansiedad.",
    category: "ToppingMate",
    cardImg: "./assets/img/BlendFolclore.jpg",
  },
  {
    id: 5,
    name: "Topping Olor a café de Bogotá",
    bid: 430,
    description: "Combinación de azúcar Mascabo y café torrado. Energía para todos tus días.",
    category: "ToppingMate",
    cardImg: "./assets/img/BlendCafe.jpg",
  },
  {
    id: 6,
    name: "Topping Zamba de la Qubrada",
    bid: 450.00,
    description: "Poleo, melisa y yerbabuena. Fresco, frutal y herbal. Calma los nervios y concilia el sueño.",
    category: "ToppingMate",
    cardImg: "./assets/img/BlendZamba.jpg",
  },
  {
    id: 7,
    name: "Gin Tonic Buey de Australia",
    bid: 380.00,
    description: "Hibiscus y menta de Egipto con romero. Refrescante y aromático con tonos magentas.",
    category: "BlendGinTonic",
    cardImg: "./assets/img/BlendBuey.jpg",
  },
  {
    id: 8,
    name: "Gin Tonic Lince del Amazonas",
    bid: 525.00,
    description: "Sabor dulce con aroma a frutos. Tonos anaranjados. Rooibos sudaricano, higo turco y cedrón.",
    category: "BlendGinTonic",
    cardImg: "./assets/img/BlendLince.jpg",
  },
  {
    id: 9,
    name: "Gin Tonic Tucán de Selva Iryapú",
    bid: 525.00,
    description: "Floral y dulce. Tonos rosados. Pétalos de rosa india, roble francés y manzana patagónica.",
    category: "BlendGinTonic",
    cardImg: "./assets/img/BlendTucan.jpg",
  },
  {
    id: 10,
    name: "Combo Blends x4",
    bid: 1890.00,
    description: "Incluye Tucán de Iryapú, Lince del Amazonas, Buey de Australia y edición especial Panda de Corea ",
    category: "BlendGinTonic",
    cardImg: "./assets/img/BlendTodos.jpg",
  },
 
];

  //______________________//

  //PARA BOTON VER MÀS
  //Funcion dividir los productos

  const divideProductsInParts = (size) => {
    // retornar la lista de productos
    let productsList = []
    for (let i = 0; i < productsData.length; i+= size) {
      // Voy a cortar cada elemento y agregar cada corte el product list
      productsList.push(productsData.slice(i,i + size))
      }
    return productsList;
  }
  
//______________________//

//Estado de aplicación:
const appState = {                             
  products: divideProductsInParts(3),
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(3).length, // 3
  activeFilter: null
};
  
