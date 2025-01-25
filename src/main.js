import { setInLocalStorage } from "./persistence/localStorage";
import { renderCategories } from "./services/categories";
import { openModal } from "./services/modal";
import { handleSearchByName } from "./services/searchBar";
import "./style.css"
import { handleGetProductsToStore } from "./views/store";


//=== Aplicacion ===//
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) =>{
  categoriaActiva =categoriaIn
};

export let productoActivo = null;

export const setProdcutoActivo = (productoIn) =>{
  productoActivo =productoIn
};

// handleGetProductsToStore()
document.addEventListener('DOMContentLoaded', () => {
  // Aquí va tu código que depende del DOM
  handleGetProductsToStore();
  renderCategories();
});

// document.addEventListener("DOMContentLoaded", () => {
//     renderCategories();
//   });

//HEADER
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click', ()=>{
  openModal()
})

const buttonSearch = document.getElementById('buttonSearch')
buttonSearch.addEventListener('click', ()=>{
  handleSearchByName()
})