//ARRAY FUNCTIONS
const arr = [1,2,3,4];

const newArray = [];

for(let i = 0; i< arr.length; i++){
    newArray[i] = ++arr[i];
}

console.log(newArray);

//map function

Array.prototype.map = function ( callback) {

    const retVal = [];
    for (let i = 0; i < this.length; i++) {
        retVal[i] = callback(this[i], i);
    }

    return retVal;
}

arr.map(element => ++element);

//filter function
Array.prototype.filter = function( callback ) {
    const retVal = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i)) {
            retVal.push(this[i]);
        }
    }
    return retVal;
}

console.log(arr.filter( (element) => element < 2))

//sort (inefficient algo)

Array.prototype.sort = function( callback ) {
    console.log("custom sort");

    const retValue = [...this];
    for (let i = 0; i < retVal.length; i++) {
        for (let j = 0; j <retVal.length - 1; j++) {
            if (callback(retVal[j], retVal[j + 1]) > 0) {
                // this is where the swap occurs
                const temp = retVal[j+1];
                retVal[j+1] = retValue[j];
                retVal[j] = temp;
            }
        }
    }
    return retVal;
}

console.log(arr.sort( (cur, next) => cur-next));

//reduce function

Array.prototype.reduce = function( callback, accumulator) {
    console.log("custom reduce");

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}

console.log(arr.reduce( (accumulator, element) => accumulator + element, 0));