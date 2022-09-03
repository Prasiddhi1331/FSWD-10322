const app_id ="b5cd15c0";
const app_key ="db0150d7edcb38a5380fdeb3d6946de0";
const button = document.querySelector('button')
const input = document.querySelector('input')

const getRecipe = async (query) => {
    const endpoint = 'https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=b5cd15c0&app_key=db0150d7edcb38a5380fdeb3d6946de0';
    const response= await fetch(endpoint)
    const data = await response.json()
    console.log(data)
};


const searchRecipe = ()=>{
    const query = input.value
    getRecipe(query)
}

button.addEventListener('click',searchRecipe)