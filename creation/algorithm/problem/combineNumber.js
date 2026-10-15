
let numberSet = [4, 6, 9, 12, 20]

var table = {}
function isOk(n) {
    if (table[n] == null) table[n] = isOk_function(n)
    return table[n]
}

function isOk_function(number) {
    if (numberSet.includes(number)) return [number];
    for (var i = 1; i < number; i++) {
        if (isOk(i)!==false && isOk(number - i)!==false) return [...isOk(i), ...isOk(number - i)];
    }
    return false;
}

function display(array){
    if(!(array instanceof Array)) return false
    var table = {}
    array.map(x=>{
        if(table[x]==null) table[x]=0
        table[x]+=1
    })
    return table;
}


for (var i = 0; i < 100; i += 1) {
    console.log(i, display(isOk(i)))
}