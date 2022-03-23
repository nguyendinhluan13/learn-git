// 1. Làm ví dụ hàm được gọi là callBack
// 2. Làm ví dụ về callback hell
function notify(){
    console.log("Hello ReactJS");
    }
    function taskOne(callback){

    callback();
    }

    taskOne(notify);

//Callback Hell
function callBackhell(A){
    A();
}

function callBackhell(A){
    A();
}

function callBackhell(A){
    A();
}
