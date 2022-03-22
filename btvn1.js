   
// Bài 1: Sử dụng vòng lặp, tính tổng giá trị các phần tử trong mảng.
// Input: [0, 5, 4, 2, 8]
// Output: 19

const arr = [0, 5, 4, 2, 8];
function sumArray() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray());

// Bài 2: Sử dụng một mảng các đôí tượng person (name, age) thành tổng hợp mảng các tên người.
// Input: const person = [
//     { name: 'John', age: 24 },
//     { name: 'Pete', age: 25 },
//     { name: 'Mary', age: 28 },
// ] 
// Output: ['John', 'Pete', 'Mary'].

const person = [ 
    { name: 'John', age: 24 },
    { name: 'Pete', age: 25 },
    { name: 'Mary', age: 28 },
]
const ten = person.map(x => x.name);
console.log(ten);

// Bài 3: Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng tên người không trùng lặp.
// Input: arr1 = ['John', 'Pete', 'Mary']
//        arr2 = ['Mary', 'Henry', 'Harry']
// Output: ['John', 'Pete', 'Mary']

arr1 = ['John', 'Pete', 'Mary']
arr2 = ['Mary', 'Henry', 'Harry'];
var arr0 = arr1.concat(arr2);
const unique = new Set(arr0);
console.log(unique);
