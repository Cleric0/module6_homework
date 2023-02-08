function primeElseNum (num) {
    if((num < 2) || (num > 1000)) {
        return 'данные неверны';
    }else{
        for (let i = 2; i < num; i++){
            if (num % i == 0){
            return 'НЕТ';}}
            return 'простое число';
    }
}

console.log(primeElseNum(44));
console.log(primeElseNum(7));
console.log(primeElseNum(1001))