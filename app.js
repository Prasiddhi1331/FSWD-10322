const arr =[1,2,3,4,5,6]

const callback =(value,index)=>{
  if(value==99) return true
}

const a = ()=>{}

const isPresent = arr.find(callback)
console.log(isPresent)

//const newArr = arr.filter((value,index) => valye%2===0?true:false)
//console.log(newArr)

//const num = 10;

//const result = num%2===0 ? "even": "odd"
//console.log(result)