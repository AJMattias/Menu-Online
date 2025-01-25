import { setProdcutoActivo } from "../main"
import { openModal } from "../services/modal"
import { handleGetProductLocalStorage } from "../persistence/localStorage"

/* STORE */
export const handleGetProductsToStore = () =>{
    //funcion que se encarga de traer loe elementos y llamar al render
    const products = handleGetProductLocalStorage()
    handleRenderList(products)

} 

//funcion encargada de filtrar y renderizar la seccion con sus respesctivos elementos
export const handleRenderList = (productsIn)=>{
    //filtrado de arrays por categoria
    const burguer = productsIn.filter((el)=> el.categoria === "Hamburguesas")
    const gaseosas = productsIn.filter((el)=> el.categoria === "Gaseosas")
    const papas = productsIn.filter((el)=> el.categoria === "Papas")

    //renderiza los elementos de la seccion
    const renderProductGroup = (productos, title) =>{
        console.log(productos)
        if(productos.length >0){
            const productosHTML = productos.map((producto, index)=>{
                return `
                    <div class="containerTargetItem" id="product-${producto.categoria}-${index}">
                        <div>
                            <img src="${producto.img}"/>
                        </div>
                        <div>
                            <h3>${producto.nombre}</h3>
                        </div>
                        <div class="targetProps">
                            <p><b>Precio: </b> $ ${producto.precio}</p>
                         </div>
                    </div>`;
            })
            //retornar la seccion con los elementos dentro
            return`
                <section class="secctionStore">
                    <div  class="containerTitle">
                        <h3>${title}</h3>
                    </div>
                    <div class="containerProductStore">${productosHTML.join("")}</div>
                </section>`;
        }else{
            return ""
        }
    }

    //render cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer")
    appContainer.innerHTML = `
        ${renderProductGroup(burguer, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}`

        //añadir elementos de manera dinamica
        const addEvents = (productsIn) => {
            if(productsIn){
                productsIn.forEach((element, index) => {
                    const productContainer = document.getElementById(
                        `product-${element.categoria}-${index}`)
                        productContainer.addEventListener("click", () => {
                           setProdcutoActivo(element)
                           openModal()
                        })
                });
            }
        }
        addEvents(burguer)
        addEvents(papas)
        addEvents(gaseosas)

}