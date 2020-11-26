import {v4 as uuidv4 } from 'uuid'
import { getRecipes } from './recipes'
import { renderRecipes } from './views'

renderRecipes()

const addBtn = document.querySelector('#add-recipe')

addBtn.addEventListener('click', ()=> {
    const uuid = uuidv4()
    location.assign(`/edit.html#${uuid}`)
})


