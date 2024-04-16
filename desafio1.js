class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error('Se requieren todos los campos.');
      }
      
      if (this.products.some(product => product.code === code)) {
        throw new Error('El codigo del producto debe ser unico, no puede repetirse.');
      }
  
      const newProduct = {
        id: this.nextId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        console.error('ERROR Not found');
        return null;
      }
      return product;
    }
  }
  
  
  const productManager = new ProductManager();
  
  // PARA AÑADIR UN PRODUCTO
  productManager.addProduct(
    'Pepsi', 
    'Gaseosa Pepsi de 1.5 litros', 
    2000, 
    'https://plazavea.vteximg.com.br/arquivos/ids/20590565-450-450/3415.jpg?v=638026273992100000', 
    'A4645892BC', 
    25
  );
  
  console.log(productManager.getProducts()); //SIRVE PARA MOSTRAR LA LISTA DE LOS PRODUCTOS RECIEN AÑADIDOS
  
  // SI AÑADIMOS PRODUCTO CON UN CODIGO EXISTENTE NOS TIENE QUE DAR ERROR
  try {
    productManager.addProduct(
        '7up', 
        'Gaseosa 7up de 1.5 litros', 
        2000, 
        'https://http2.mlstatic.com/D_NQ_NP_871405-MLA54275225467_032023-O.webp', 
        'A4645892BC', 
        30
    );
  } catch (error) {
    console.error(error.message); // "El codigo del producto debe ser unico, no puede repetirse."
  }
  
  // PRODUCTO POR ID
  console.log(productManager.getProductById(1)); // TIENE QUE MOSTREAR EL PRODUCTO CON ID 1
  
  // TIENE QUE MOSTRAR UN NOT FOUND PORQUE EL CODIGO NO EXISTE
  console.log(productManager.getProductById(999)); // "Not found"
  