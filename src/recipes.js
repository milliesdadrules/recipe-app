const loadRecipes = () =>{
    const recipesJSON = localStorage.getItem('recipes')
    try {
        if(recipesJSON){
            return recipesJSON ? JSON.parse(recipesJSON) : []
        }
    } catch (error){
        return []
    }
}

let recipes = loadRecipes()
const getRecipes = () => recipes

const addRecipe = (recipe) =>{
    
    const recipes = getRecipes()
    recipes.push(recipe)
    console.log(recipe, 'recipes')
    saveRecipes()
    location.assign('index.html')
}

const saveRecipes = () => localStorage.setItem('recipes',JSON.stringify(recipes))


export { addRecipe, getRecipes }