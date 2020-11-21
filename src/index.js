import { v4 as uuidv4 } from 'uuid'
import { loadRecipes } from './recipes'


// localStorage.setItem("recipes",JSON.stringify(recipes))

document.querySelector('#add-recipe').addEventListener(('click'), (e) => {
    const recipeID = uuidv4()
    location.assign(`edit.html#${recipeID}`)
})