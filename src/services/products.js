
import Swal from "sweetalert2";
import { productoActivo } from "../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
import { closeModal } from "./modal";

const accpetButton = document.getElementById('acceptButton')
accpetButton.addEventListener('click', ()=>{
  handleSaveOrModifyElement()
})

//funcion de guardar

export const handleSaveOrModifyElement = () =>{
  const nombre = document.getElementById('nombre').value;
  const img = document.getElementById('img').value;
  const precio = document.getElementById('precio').value;
  const categoria = document.getElementById('categoria').value;
  let object = null
  if(productoActivo){
    object = {
      ...productoActivo,
      nombre, img, precio, categoria
    }
  }else{
    object = {
      id: new Date().toISOString(),  // Generamos un id único
      nombre, img, precio, categoria
    };
  }
  Swal.fire({
    title: "Correcto",
    text: "Producto agregado correctamente!",
    icon: "success"
  });
   setInLocalStorage(object)
   handleGetProductsToStore()

   closeModal();

}

//eliminar elemento
export const handleDeleteProduct=() =>{
  Swal.fire({
    title: "¿Desea eliminar elemento?",
    text: "Si lo eliminas sera permanentemente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetProductLocalStorage()
      const result = products.filter((el)=>el.id !== productoActivo.id)
      //setear el nuevo array
      localStorage.setItem('products', JSON.stringify(result))
      const newProducts = handleGetProductLocalStorage()
      handleRenderList(newProducts)
      closeModal()
    }else{
      closeModal()
    }
  });
  
}