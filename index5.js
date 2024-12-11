function lowercaseFirstLetter(str){
    if(!str)return str;
    return str[0].toLowerCase()+str.slice(1);
}
console.log(lowercaseFirstLetter("Hello"));