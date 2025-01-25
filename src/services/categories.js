import { categoriaActiva } from "../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

//categorias
export const handleFilterProductByCategory = (categoryIn) =>{
    const products = handleGetProductLocalStorage();


    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products)
            break;
        case "Todo":
            handleRenderList(products)
            break;
        case"Hamburguesas":
        case"Papas":
        case"Gaseosas":
            const result = products.filter((el) => el.categoria === categoryIn)
            handleRenderList(result)
    
        default:
            break;
        case "mayorPrecio":
            const resultmayor = products.sort((a, b) => b.precio - a.precio)
            handleRenderList(resultmayor)
            break
        case "menorPrecio":
            const resultmenor = products.sort((a, b) => a.precio - b.precio)
            handleRenderList(resultmenor)
            break
    }
}


//render de la vista categorias

export const renderCategories =() =>{
    //tomamos elementos de la listas
    const ulList = document.getElementById("listFilter");
    //creamos esos eleentos dentro dela lista
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;
    //añadimos dinamicamente al evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener('click', ()=>{
            handlerClick(liElement)
        })
    })
    //verificamos y manejamos el estilo del elemento activo
    const handlerClick = (elemento)=>{
        handleFilterProductByCategory(elemento.id)
        liElements.forEach((el)=>{
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive");
            }else{
                if(elemento === el){
                    el.classList.add("liActive")
                }
            }
        })
    }

};

