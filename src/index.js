import {v4 as uuidv4 } from 'uuid'
import { getRecipes } from './recipes'
import { renderRecipes } from './views'
import { setFilters } from './filter'

let recipes = []

recipes = getRecipes()
renderRecipes(recipes)

const searchEl = document.querySelector('#search-recipe')
const addBtn = document.querySelector('#add-recipe')

searchEl.addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderRecipes(recipes)
})

addBtn.addEventListener('click', ()=> {
    const uuid = uuidv4()
    location.assign(`/edit.html#${uuid}`)
})


