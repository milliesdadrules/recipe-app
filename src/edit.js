import { getRecipes, addRecipe, updateRecipe, removeRecipe, addIngredient } from './recipes'
import { generateIngredientsDOM} from './views'
import { v4 as uuidv4 } from 'uuid'

const recipeID = location.hash.substring(1)
const titleEl = document.querySelector('#recipe-title')
const detailEl = document.querySelector('#recipe-detail')
const saveBtn = document.querySelector('#save-recipe')
const removeBtn = document.querySelector('#remove-recipe')
const ingredientEl = document.querySelector('#ingredient')
const addIngredBtn = document.querySelector('#add-ingredient')

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
        recipe.ingredients.forEach((ingredient=>{
            document.querySelector('#ingredients').appendChild(generateIngredientsDOM(ingredient))
        }))
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
        if(updateTitle){
        addRecipe({
                id: recipeID,
                title: updateTitle,
                detail: updateDetail,
                ingredients: ingredients
            })
        }
    }
    location.reload()
})

removeBtn.addEventListener('click', (e) => {
    if(exists){
        removeRecipe(recipeID)
    }
})

addIngredBtn.addEventListener('click',(e)=>{
    getRecipes().find((recipe) => {
        const food = recipe.id === recipeID

        if(food){
            if(ingredientEl.value.trim().length > 0) {
                addIngredient(recipe,{
                    id: uuidv4(),
                    name: ingredientEl.value,
                    instock: false,
                    recipeID: recipe.id
                })
            }
        }
        location.reload()
    })
})
