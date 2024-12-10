const mask=document.querySelector('[data-mask]') //находим прелоадер

//функция-конструктор
const preloader = function(mask) { //принимает переменную маск
    this.mask = mask 
    this.init() 
}

//функция прелоадер записывается в свойство виндовпрелоадер
//чтобы обеспечить доступ к нему снаружи анонимной функции
window.preloader = preloader
const fn = preloader.prototype //для сокращения записи перемнная
//fn, которая ссылкается на прототип прелоадера

//инициализация
fn.init = function (){
    window.addEventListener('load', () =>{
        this.mask.classList.add('hide')
    })
}

if (mask){ //если есть переменная маск, то создаем экзэмпляр конструктора
    new preloader(mask)
}