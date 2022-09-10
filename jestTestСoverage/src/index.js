
// Функция get(arr, index, defaultValue = null) извлекает из массива значение по указанному индексу, если индекс существует. 
// Если индекс не существует, возвращает значение по умолчанию.
let get = (arr, index, defaultValue = null) =>{
    return arr.includes(index)? arr[index] : defaultValue;
} 

// Функция indexOf(arr, value, fromIndex) возвращает первый индекс, 
// по которому переданное значение может быть найдено в массиве или -1, 
// если такого значения нет.
let indexOf = (arr, value, fromIndex) =>{
    return arr.indexOf(value, fromIndex);
}

// Функция slice(arr, begin, end) возвращает новый массив, содержащий копию части исходного массива.
let slice = (arr, begin, end) => {
    return arr.slice(begin, end);
}

module.exports = {
    get,
    indexOf,
    slice
} 