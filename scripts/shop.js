
let buttonToOpenModalForm = document.querySelector('.sign-in'); 
let buttonToImmediatelyCloseModalForm = document.querySelector('.mainmodal-close');
let modalForm = document.querySelector('.mainmodal');
let hamburgerMenu = document.querySelector('.hamburger-menu');
const filterButton = document.querySelector('.path-button');
const filterWindow = document.querySelector('.filters-modal');
const buttonToCloseFilter = document.querySelector('.filter-close');
let submodalForm = document.querySelector('.submodal');
let submodalWindow = document.querySelector('.submodal-window');
let navigationLink = document.querySelector('.nav-link--enter');



 
buttonToOpenModalForm.addEventListener('click', function(){   
    modalForm.classList.add("mainmodal--visible");
});

buttonToImmediatelyCloseModalForm.addEventListener('click', function(){
    modalForm.classList.remove("mainmodal--visible");
});

filterButton.addEventListener('click', function(){
    filterWindow.classList.add('filters--visible');
});

buttonToCloseFilter.addEventListener('click', function(){
    filterWindow.classList.remove('filters--visible');
});

hamburgerMenu.addEventListener('click', ()=>{
    submodalForm.classList.add('submodal--visible');
});

submodalWindow.addEventListener('mouseup', ()=>{
    submodalForm.classList.remove('submodal--visible');
});

navigationLink.addEventListener('click', function(){   
    modalForm.classList.add("mainmodal--visible");
});

