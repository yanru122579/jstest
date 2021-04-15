
// ES5
function abc(){

}

// ES6
const abc2 = function(data){
    console.log(data);
} 

abc();
abc2();

// This
// ES6 arrow
const abc3 =  ()=> {
    console.log('abc3');
}

const abc4 =  data => {
    console.log('abc4',data);
}

abc4('hi');


const abc5 =  (a, b) => {
    console.log('abc5', a+b);
}

abc5(10, 11);


const abc6 =  function (a, b) {
    console.log('abc6', a+b);
}

abc(10, 11);

// FUNCTION 的 RETURN
const abc7 =  function (a, b) {
    // console.log('abc7', a+b);
    return a+b
}

// console.log('abc7', abc7(20,21));

let abc7Result = abc7(20,21);
console.log('abc7Result',abc7Result);

// 箭頭函式的 return

const abc8 =   (a, b)=> {
    // console.log('abc7', a+b);
    return a+b
}

console.log('abc8', abc8(11,11));


// 箭頭函式的 return 程式碼只有一行的時候可省略
// 不要加大括號/花括號
const abc9 =   (a, b) => a+b

console.log('abc9', abc9(11,11));

