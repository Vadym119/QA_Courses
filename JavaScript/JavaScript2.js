// Task 1

let k = 1
while(k <= 10) {
    console.log(Math.pow(2, k))
    k++
}


for( a=1; a<=10; a++) {
    console.log(Math.pow(2, a))
}


let j = 1

function power(j) {
    while(j<=10) {
        console.log(Math.pow(2, j))
        j++
    }
}
power(j)

// Tsk 2

let smile = ':)'
let result = ''
for(let i = 1; i <= 5; i++) {
    result += smile
    console.log(result)
}

// Task 2*

let result1 = ''
function printSymbol(symbol, numbOfRows) {
    
    for ( z = 1; z <= numbOfRows; z++) {
        result1 += symbol
        console.log(result1)
    }
}
printSymbol(';', 10)