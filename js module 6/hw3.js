function fanc (a) {
    return function(b){
        return (a + b);
    }
}

console.log(fanc(42)(14));
