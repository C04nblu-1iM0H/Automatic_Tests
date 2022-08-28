const mapArrToString = (arr) =>{
    return arr.filter(el => Number.isInteger(el)).map(String);
}

module.exports = mapArrToString;