function count(first, last){
  var sum=0;
  for(var i =first; i<=last;i++){
    sum = sum * i;
  }
  return sum;
}

function printToScreen(){
  console.log("10 secs over!");
}

setTimeout(printToScreen , 10*1000);

var ans = count(1,10000000);
console.log(ans);