function add(numbers){
    if(numbers == ""){
        return 0;
    }
    const delimiter = /[\n,]/;
    const allNumbers = numbers.split(delimiter).map(item=>parseInt(item));
    const negativeNumbers = allNumbers.filter((item)=>item<0);
    if(negativeNumbers.length > 0){
        throw new Error('Negative numbers are not allowed');
    }
    const result = allNumbers.filter((item)=>item > 0).reduce((acc,item)=>acc+parseInt(item),0);
    return result;
}

module.exports = add;