var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 let myArr = []
 for(i in obj){
     myArr.push(i);
 }
 return myArr;
}

console.log(printAllValues(obj));