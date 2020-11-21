import {v4 as uuidv4} from 'uuid'
let recipes = []

// Read any existing recipes from localStorage (recipes)
const loadRecipes = () =>{
    const recipesJSON = localStorage.getItem('recipes')
    try {
        recipes = recipesJSON ? JSON.parse(recipesJSON) : []
    } catch (error){
        recipes = []
    }
}

// Saves new recipes to localStorage (recipes)
const saveRecipes = () =>{
    localStorage.setItem('recipes',JSON.stringify(recipes))
}

// Funtion to expose the recipes
const getRecipes = () => recipes

// call to initially load recipes
loadRecipes()

export { loadRecipes, saveRecipes, getRecipes }