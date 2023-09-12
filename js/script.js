//alert("ok")


//Selecionando os elementos HTML que iremos manipular com o JS
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');
var header = document.querySelector('.header');


//console.log(btnMenu);
//console.log(menu);//conferir se funciona

//adicionar um evento de click ao botão
btnMenu.addEventListener('click',function(){
   
    //add/remove a classe menu-open
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
})

//ao clicar na área do menu(aberto), fecha o menu
menu.addEventListener('click', function(){
    this.classList.remove('menu-open');//this-> este elemento
    btnMenu.classList.remove('x');
})



//adicionar um evento de scroll (rolagem da páginas)
window.addEventListener('scroll', function(){
//console.log('rolou');
    //console.log(window.scrollY);

//se a quantidade de pixels rolados for maior que 100
if(window.scrollY > 100){
header.classList.add('header-scroll');
}

else{
header.classList.remove('header-scroll');
}
   
})