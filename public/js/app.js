const endpoint = "https://jsonplaceholder.typicode.com/todos"

const getData = async ()=>{
    const response = await new Promise(resolve=>{
        setTimeout(()=>{
        resolve()
    },5000)
    })

    for(let i=0;i<10000;i++)console.log("hi")
}

getData()
console.log('something')