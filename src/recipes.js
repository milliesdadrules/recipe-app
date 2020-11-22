import {v4 as uuidv4} from 'uuid'
// Read any existing recipes from localStorage (recipes)
const loadRecipes = () =>{
    const recipesJSON = localStorage.getItem('recipes')
    try {
        return recipesJSON ? JSON.parse(recipesJSON) : []
    } catch (error){
        recipes = []
    }
}

let recipes = loadRecipes()

// Saves new recipes to localStorage (recipes)
const addRecipe = (recipe) =>{
    recipes.push(recipe)
    localStorage.setItem('recipes',JSON.stringify(recipes))
}

// Funtion to expose the recipes
const getRecipes = () => recipes

// call to initially load recipes
loadRecipes()
console.log('recipes.js has run');
export { loadRecipes, getRecipes,  addRecipe}