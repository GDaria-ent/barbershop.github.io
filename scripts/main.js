let a = document.querySelectorAll('.header-navigation-link');
let lis = Array.prototype.slice.call(a);
let buttonToOpenModalForm = document.querySelector('.sign-in'); 
let buttonToImmediatelyCloseModalForm = document.querySelector('.mainmodal-close');
let modalForm = document.querySelector('.mainmodal');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let submodalForm = document.querySelector('.submodal');
let submodalWindow = document.querySelector('.submodal-window');
let navigationLink = document.querySelector('.nav-link--enter');

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

hamburgerMenu.addEventListener('click', ()=>{
    submodalForm.classList.add('submodal--visible');
});

submodalWindow.addEventListener('mouseup', ()=>{
    submodalForm.classList.remove('submodal--visible');
});

navigationLink.addEventListener('click', function(){   
    modalForm.classList.add("mainmodal--visible");
});




