import { getRecipes, addRecipe, updateRecipe, removeRecipe } from './recipes'
const recipeID = location.hash.substring(1)
const titleEl = document.querySelector('#recipe-title')
const detailEl = document.querySelector('#recipe-detail')
const saveBtn = document.querySelector('#save-recipe')
const removeBtn = document.querySelector('#remove-recipe')

let exists = false
let updateDetail = ''
let updateTitle = ''
let ingredients = []


getRecipes().find((recipe) => {
    const details = recipe.id === recipeID
    if(details){
        titleEl.value = recipe.title
        updateTitle = recipe.title
        detailEl.value = recipe.detail
        updateDetail = recipe.detail
        saveBtn.textContent = "Update Recipe"
        exists = true
    }
})

titleEl.addEventListener('input', (e) => {
    updateTitle = e.target.value
})

detailEl.addEventListener('input', (e) => {
    updateDetail = e.target.value
})


saveBtn.addEventListener('click', (e) => {
    if(exists){
        updateRecipe(recipeID,{
            title: updateTitle,
            detail: updateDetail
        })
    } else {
    addRecipe({
            id: recipeID,
            title: updateTitle,
            detail: updateDetail,
            ingredients: ingredients
        })
    }
})

removeBtn.addEventListener('click', (e) => {
    if(exists){
        removeRecipe(recipeID)
    }
})

