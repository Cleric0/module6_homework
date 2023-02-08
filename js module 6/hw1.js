let evenCount = 0;
let oddCount = 0;
let nullCount = 0;
let arrCount = [0, 1, 97, 0, 'uti', 4, 31, null, 56];
function countEvenOdd() {
for (let i = 0; i < arrCount.length; i++) {
    if (typeof arrCount[i] != 'number'){
        console.log(arrCount[i])}
    if (arrCount[i] % 2 == 0 && arrCount[i] !=0){
        evenCount++
    }else if (arrCount[i] % 2 != 0){
        oddCount++
    }else if (arrCount[i] === 0)
        nullCount++;
}
console.log('нечетных чисел ' + evenCount)
console.log('четных чисел ' + oddCount)
console.log('нулей ' + nullCount)
}

countEvenOdd()
