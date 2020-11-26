import { getRecipes, removeRecipe, removeIngredient, toggleIngredient } from "./recipes";

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

const generateIngredientsDOM = (ingredient) => {
    // Create ingredients DOM elements
    const listIngredients = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkIngredient = document.createElement('input')
    const nameEl = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup ingredient checkbox
    checkIngredient.setAttribute('type','checkbox')
    checkIngredient.checked = ingredient.instock
    containerEl.appendChild(checkIngredient)
    checkIngredient.addEventListener('change',()=>{
        toggleIngredient(ingredient.id)
    })

    // Setup ingredient text
    nameEl.textContent = ingredient.name
    containerEl.appendChild(nameEl)

    // Setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button','button--text')

    // Setup container
    listIngredients.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    listIngredients.appendChild(containerEl)

    listIngredients.appendChild(removeButton)
    removeButton.addEventListener('click', ()=>{
        removeIngredient()
    })
    return listIngredients
}
export { renderRecipes, generateRecipeDOM, generateIngredientsDOM }