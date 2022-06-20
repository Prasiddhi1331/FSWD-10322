const arr =[1,2,3,4,5,6]

const callback =(value,index)=>{
  if(value==99) return true
}

const a = ()=>{}

const isPresent = arr.find(callback)
console.log(isPresent)