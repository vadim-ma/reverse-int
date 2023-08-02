module.exports = function reverse (n) {
    return Number(reverseStr(Math.abs(n).toString()));;
}
function reverseStr(str){
    let result = '';
    for(let i = 0; i < str.length; i++){
        result = `${str[i]}${result}`;
    }
    return result;
}