let a = document.querySelectorAll('.nav-item');
let lis = Array.prototype.slice.call(a);
let buttonToOpenModalForm = document.querySelector('.sign-in'); 
let buttonToImmediatelyCloseModalForm = document.querySelector('.mainmodal-close');
let modalForm = document.querySelector('.mainmodal');
let hamburgerMenu = document.querySelector('.hamburger-menu');
const filterButton = document.querySelector('.path-button');
const filterWindow = document.querySelector('.filters-modal');
const buttonToCloseFilter = document.querySelector('.filter-close');


lis.forEach(function(item, lis) {
    item.addEventListener('click', () =>{
    
        if(item.style.color === 'rgb(255, 255, 255)'){
            item.style.color = 'red';
        }else{
            item.style.color ='#FFFFFF';
        }
        
    });
});

 
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
