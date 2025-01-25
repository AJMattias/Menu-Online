import { handleGetProductLocalStorage } from "../persistence/localStorage"
import { handleRenderList } from "../views/store"

export const handleSearchByName =() =>{
    const inputHeader = document.getElementById('inputHeader')
    const productos = handleGetProductLocalStorage()

    const result = productos.filter((el) =>
        //hamburguesa Hamburguesa
        el.nombre.toLowerCase().includes(inputHeader.value)
    )
    handleRenderList(result)
}