function makeCart(){
    return new Array(); 
}

Array.prototype.addItem = function(good, count){ //добавление товара в корзину 
    this.push({...good, count}); //добавляем объект в массив и создаём в объекте новый ключь (count: val)
}

//выводим содержимое массива товаров, которые были добовлены в корзину
Array.prototype.getItems = function (){
    return this;
}

//возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учётом их количества.
Array.prototype.getCost = function(){
    //1. при помощи метода map() обратился к своиствам и вычислил (количество * цену) получил общую стоимость за все одинаковые товары
    //2. после чего этим же методом нашёл общую стоимость корзины.  
    return this.map(c => c.price * c.count).map(c => x+=c, x=0).reverse()[0];
}

Array.prototype.getCount = function(){
    return this.map(el => x += el.count, x=0).reverse()[0];
}

Array.prototype.remove = function(elName){
    let index = this.map((item) => item.name).indexOf(elName);
    return this.splice(index, 1);
}

module.exports = {
    makeCart
} 