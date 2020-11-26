import { getRecipes } from "./recipes";

const generateRecipeDOM = (recipe) => {
    console.log(recipe.id);
    const recipeEl = document.createElement('a')
    const titleEl = document.createElement('span')
    const summaryEl = document.createElement('p')

    titleEl.textContent = recipe.title
    recipeEl.appendChild(titleEl)
    titleEl.classList.add('recipe-item__title')
    summaryEl.classList.add('recipe-item__subtitle')
    summaryEl.textContent = recipe.detail
    recipeEl.appendChild(summaryEl)

    recipeEl.href = `/edit.html#${recipe.id}`
    recipeEl.classList.add('recipe-item')
    return recipeEl
}
const renderRecipes = () => {
    const recipes = getRecipes()
    const listEl = document.querySelector('#recipes')
    if(recipes.length > 0){
        recipes.forEach((recipe) => {
            const showRecipe = generateRecipeDOM(recipe)
            listEl.appendChild(showRecipe)
        })  
    } else {
        const noRecipes = document.createElement('p')
        noRecipes.textContent = "No recipes to display"
        noRecipes.classList.add('empty-message')
        listEl.appendChild(noRecipes)
    }
}

export { renderRecipes, generateRecipeDOM }