//=== LOCAL STORAGE ===//

export const handleGetProductLocalStorage = () =>{
    const products = JSON.parse(localStorage.getItem('products'));
    if(products){
        return products
    }else{ 
        return [];
    }
}

//guardar en local storage
//recibir un producto
export const setInLocalStorage = (productIn) =>{
    //traer los elementos
    let productsInLocal = handleGetProductLocalStorage()

    const existingIndex = productsInLocal.findIndex(
        (productsLocal) => productsLocal.id === productIn.id)

    //verificar si el elemento existe
    if(existingIndex !== -1){
        //si existe debe reemplazarse
        productsInLocal[existingIndex] = productIn;
    }else{
        //sino existe se agrega
        productsInLocal.push(productIn);
    }
    //setear el nuevo array
    localStorage.setItem('products', JSON.stringify(productsInLocal))

}
