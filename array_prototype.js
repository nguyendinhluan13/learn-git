const array = ["A","B","C"];
Array.prototype.foreach1 = function(callback){
  for(let index in this) {
    if(this.hasOwnProperty(index)){
      callback(this[index],index);
    }
  }
};

fruit.foreach1(
    function(array,index)
  {
  console.log(array,index);
  }
);