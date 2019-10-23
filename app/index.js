
class Product {
    
    constructor(name, price, year) {

    this.name = name, 
    this.price = price,
    this.year = year 
    }

}

class UI{

 addProducts(product) {

       const listProduct = document.getElementById('product-list')
       const element = document.createElement('div')

            element.innerHTML= `
                <div class="target">
                    <div class="target-details"> 
                        <strong>Product :</strong> ${product.name} 
                        <Strong>Price :</Strong> ${product.price}
                        <strong>Year :</strong> ${product.year}
                    </div> 
                    <div>
                        <a href="#" id="delete"> delete </a>
                    </div>
                </div>
            `;

       listProduct.appendChild(element)
       document.getElementById('product-form').reset()

    }

    deleteProduct(element){
        if(element.id === 'delete'){
            (element.parentElement.parentElement.parentElement).remove()
        }
    }

    // ShowMessage(){
        
    //     }
}



document.getElementById('product-form').addEventListener('submit', function(e){

     name = document.getElementById('productName').value
     price = document.getElementById('productPrice').value
     year = document.getElementById('productYear').value
    
     const product = new Product(name, price , year)

     const ui = new UI();

     ui.addProducts(product)
    // console.log(product)
        e.preventDefault(); //funcion para no refrescar el DOM
    });
//foreach - map
    document.getElementById('product-list').addEventListener('click', function(e){
        
        // elemento = document.getElementById('delete');
        // console.log(elemento)
        const element = new UI();
        element.deleteProduct(e.target) //e.target sirve para ver que elemento del DOM seleccionamos
        (console.log('borrando archivo')).setTimeout(5000)
    })