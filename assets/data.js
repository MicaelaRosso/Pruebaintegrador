const productsRoyalBlends = [
    {
      id: 1,
      name: "Carrot Cake Disney",
      description: "Hebras de té rojo, baby carrots y canela en rama, con el dulce sabor clásico del pastry americano.",
      price: 350,
      category: "te",
      cardImg: "./assets/img/tecarrot.jpg",
    },
    {
        id: 2,
        name:"Jardines de Cuzco",
        description:"Té verde color Machu Pichu, flores de manzanilla y flores de caléndula, muy floral, herval y liviano",
        price: 400,
        category: "te",
        cardImg:"./assets/img/tejardines.jpg",
    },
    {
      id: 3,
      name:"Leña de árbol Alemán",
      description:"Aromas amaderados entre árboles nevados. Té negro, malta caramelo, humo natural.",
      price: 250,
      category: "te",
      cardImg: "./assets/img/teleña.jpg",
    },
    {
        id: 4,
        name: "Carrot Cake Disney",
        description: "Hebras de té rojo, baby carrots y canela en rama, con el dulce sabor clásico del pastry americano.",
        price: "350",
        category: "mate",
        cardImg: "./assets/img/tecarrot.jpg",
      },
      {
          id: 5,
          name:"Jardines de Cuzco",
          description:"Té verde color Machu Pichu, flores de manzanilla y flores de caléndula, muy floral, herval y liviano",
          price: 400,
          category: "mate",
          cardImg:"./assets/img/tejardines.jpg",
      },
      {
        id: 6,
        name:"Leña de árbol Alemán",
        description:"Aromas amaderados entre árboles nevados. Té negro, malta caramelo, humo natural.",
        price: 250,
        category: "mate",
        cardImg: "./assets/img/teleña.jpg",
      },
      {
        id: 7,
        name: "Carrot Cake Disney",
        description: "Hebras de té rojo, baby carrots y canela en rama, con el dulce sabor clásico del pastry americano.",
        price: 350,
        category: "gintonic",
        cardImg: "./assets/img/tecarrot.jpg",
      },
      {
          id: 8,
          name:"Jardines de Cuzco",
          description:"Té verde color Machu Pichu, flores de manzanilla y flores de caléndula, muy floral, herval y liviano",
          price: 400,
          category: "gintonic",
          cardImg:"./assets/img/tejardines.jpg",
      },
      {
        id: 9,
        name:"Leña de árbol Alemán",
        description:"Aromas amaderados entre árboles nevados. Té negro, malta caramelo, humo natural.",
        price: 250,
        category: "gintonic",
        cardImg: "./assets/img/teleña.jpg",
      },
    
  ];

  //______________________//

  //PARA BOTON VER MÀS
  //Funcion dividir los productos
  const divideProductsInParts = (size) => {
    // retornar la lista de productos
    let productsList = []
    // 0 - 6 - 12
    for (let i = 0; i < productsRoyalBlends.length; i+= size) {
      // Voy a cortar cada elemento y agregar cada corte el product list
      productsList.push(productsRoyalBlends.slice(i,i + size))
      }
    return productsList;
  }
  
//______________________//

//Estado de aplicación:
const appState = {                             //  0                     1              2
  products: divideProductsInParts(9), // [ [{},{},{},{},{}] , [{},{},{},{},{}], [{},{},{},{},{}]] 3
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(9).length, // 3
  activeFilter: null
};
