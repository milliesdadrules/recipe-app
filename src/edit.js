import { getRecipes, addRecipe } from './recipes'
const recipeID = location.hash.substring(1)
const titleEl = document.querySelector('#recipe-title')
const detailEl = document.querySelector('#recipe-detail')
const saveBtn = document.querySelector('#save-recipe')

let updateDetail = ''
let updateTitle = ''
let ingredients = []

titleEl.addEventListener('input', (e) => {
    updateTitle = e.target.value
    console.log((updateTitle));
})

detailEl.addEventListener('input', (e) => {
    updateDetail = e.target.value
    console.log(updateDetail);
})


saveBtn.addEventListener('click', (e) => {

    addRecipe({
        id: recipeID,
        title: updateTitle,
        detail: updateDetail,
        ingredients: ingredients
    })

})


console.log(getRecipes())