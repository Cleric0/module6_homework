function checkNum(a, b) {
    let setInums = setInterval(function () {
      console.log(a);
        if(a == b){
            clearInterval(setInums);
        }
        a++;
    }, 1000);
}
checkNum(5,15);

