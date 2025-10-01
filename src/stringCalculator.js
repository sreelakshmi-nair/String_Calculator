function add(numbers){
    if(numbers == ""){
        return 0;
    }
    const result = numbers.split(/[\n,]/).reduce((acc,item)=>acc+parseInt(item),0);
    return result;
}

module.exports = add;