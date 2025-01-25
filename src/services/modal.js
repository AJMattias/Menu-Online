//======= POP UP ===========//
import Swal from "sweetalert2";
import { productoActivo, setProdcutoActivo } from "../main";
import { handleDeleteProduct, handleSaveOrModifyElement } from "./products";

const buttonCancel = document.getElementById('cancelButton')
buttonCancel.addEventListener('click', ()=>{
  handleCloseButton();
})

const accpetButton = document.getElementById('acceptButton')
accpetButton.addEventListener('click', ()=>{
  handleSaveOrModifyElement()
})

const handleCloseButton =() =>{
  closeModal()
}
//funciones abrir y cerrar modal
export const openModal = ()=>{
  const modal = document.getElementById('modalPopup')
  modal.style.display = 'flex';
  const buttonDelete = document.getElementById('deleteButton')
  if(productoActivo){ 
    buttonDelete.style.display= "block"
  }else{
    buttonDelete.style.display= "none"
  }

  if(productoActivo){
    const nombre = document.getElementById('nombre');
    const img = document.getElementById('img');
    const precio = document.getElementById('precio');
    const categoria = document.getElementById('categoria');  
  
    nombre.value =productoActivo.nombre
    img.value =productoActivo.img
    precio.value =productoActivo.precio
    categoria.value =productoActivo.categoria
  }
};

const resetModal =() =>{
  const nombre = document.getElementById('nombre');
  const img = document.getElementById('img');
  const precio = document.getElementById('precio');
  const categoria = document.getElementById('categoria');
  nombre.value =""
  img.value =""
  precio.value =0
  categoria.value ="Seleccione una categoria"
}
export const closeModal = ()=>{
  const modal = document.getElementById('modalPopup')
  modal.style.display = 'none';
  setProdcutoActivo(null)
  resetModal()
};

const deleteButton = document.getElementById('deleteButton')
deleteButton.addEventListener('click', ()=>{
  handleButtonDelete()
})

const handleButtonDelete =() =>{
  handleDeleteProduct()
}