import { getRecipes, toggleIngredient, removeIngredient } from "./recipes";
import { getFilters } from './filter'

const generateRecipeDOM = (recipe) => {
    console.log(recipe.id);
    const recipeEl = document.createElement('a')
    const titleEl = document.createElement('span')
    const summaryEl = document.createElement('p')
    let items = 0
    let summary = ''
    recipe.ingredients.forEach((ingredient) => {
        if(ingredient.instock){
            items++
        }
    })

    if(!recipe.ingredients || items === 0){
        summary = 'You have no ingredients for this recipe.'
    } else if(items === recipe.ingredients.length){
        summary = 'You have all the ingredients for this recipe.'
    } else {
        summary = 'You have some ingredients for this recipe.'
    } 

    titleEl.textContent = recipe.title
    recipeEl.appendChild(titleEl)
    titleEl.classList.add('recipe-item__title')
    summaryEl.classList.add('recipe-item__subtitle')
    summaryEl.textContent = summary
    recipeEl.appendChild(summaryEl)

    recipeEl.href = `/edit.html#${recipe.id}`
    recipeEl.classList.add('recipe-item')
    return recipeEl
}
const renderRecipes = () => {
    const { searchText} = getFilters()
    const recipes = getRecipes()
    const listEl = document.querySelector('#recipes')
    const filteredRecipes = recipes.filter((recipe) => {
        return recipe.title.toLowerCase().includes(searchText.toLowerCase())
    })
    listEl.innerHTML = ''
    if(filteredRecipes.length > 0){
        filteredRecipes.forEach((recipe) => {
            listEl.appendChild(generateRecipeDOM(recipe))
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
        toggleIngredient(ingredient.id,ingredient.recipeID)
        console.log(ingredient.id,ingredient.recipeID )
    })

    // Setup ingredient text
    nameEl.textContent = ingredient.name
    containerEl.appendChild(nameEl)

    // Setup the remove button
    removeButton.textContent = 'remove'
    removeButton.setAttribute('id','remove-ingredient')
    removeButton.classList.add('button','button--text')

    // Setup container
    listIngredients.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    listIngredients.appendChild(containerEl)

    listIngredients.appendChild(removeButton)
    removeButton.addEventListener('click', ()=>{
        removeIngredient(ingredient.id, ingredient.recipeID)
    })
    return listIngredients
}
export { renderRecipes, generateRecipeDOM, generateIngredientsDOM }