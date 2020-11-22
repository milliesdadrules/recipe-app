import { v4 as uuidv4 } from 'uuid'
import {addRecipe} from './recipes'

const recipeID = location.hash.substring(1)
const titleEl = document.querySelector('#recipe-title')
const detailEl = document.querySelector('#recipe-detail')
const saveBtn = document.querySelector('#save-recipe')


saveBtn.addEventListener('click', (e) => {
    addRecipe({
        id: recipeID,
        title: titleEl.textContent,
        detail: detailEl.textContent
    })
})
