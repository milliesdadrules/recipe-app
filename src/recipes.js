let recipes = []
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

recipes = loadRecipes()

const getRecipes = () => recipes

const addRecipe = (recipe) =>{
    recipes.push(recipe)
    saveRecipes()
    location.assign('index.html')
}

const updateRecipe = (id, updates) =>{
    const recipe = recipes.find((recipe) => recipe.id === id)
    if(!recipe){
        return
    }
    if(typeof updates.title === 'string'){
        recipe.title = updates.title
    }
    if(typeof updates.detail === 'string'){
        recipe.detail = updates.detail
    }
    saveRecipes()
    location.assign('index.html')

}

const removeRecipe = (id) =>{
    const index = recipes.findIndex((recipe) => {
        return recipe.id === id
    })
    console.log(index, 'remove');
}
const saveRecipes = () => localStorage.setItem('recipes',JSON.stringify(recipes))


export { addRecipe, getRecipes, updateRecipe, removeRecipe }