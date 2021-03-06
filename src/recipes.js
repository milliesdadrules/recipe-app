import { generateIngredientsDOM } from "./views"

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
    //location.assign('index.html')
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
    recipes.splice(index,1)
    saveRecipes()
    console.log(index, 'remove');
    location.assign('index.html')
}
const saveRecipes = () => localStorage.setItem('recipes',JSON.stringify(recipes))

const toggleIngredient = (id, recipeID) =>{
    const recipe = recipes.find((recipe)=>{
        return recipe.id === recipeID
    })
    const checked = recipe.ingredients.find((ingredient) => {
        return ingredient.id === id
    })
    if(checked){
        checked.instock = !checked.instock
        saveRecipes()
    }
    
}

const removeIngredient = (id, recipeID) =>{
    const recipe = recipes.find((recipe)=>{
        return recipe.id === recipeID
    })
    const index = recipe.ingredients.findIndex((ingredient) => {
        return ingredient.id === id
    })
    recipe.ingredients.splice(index,1)
    saveRecipes()
    location.reload()
}

const addIngredient = (recipe, ingredient) =>{
    recipe.ingredients.push({
        id: ingredient.id,
        name: ingredient.name,
        instock: ingredient.instock,
        recipeID: ingredient.recipeID
    })
    saveRecipes()

}
export { addRecipe, getRecipes, updateRecipe, removeRecipe,toggleIngredient, addIngredient,removeIngredient }