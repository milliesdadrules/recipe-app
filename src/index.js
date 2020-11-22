import { v4 as uuidv4 } from 'uuid'
import { loadRecipes } from './recipes'

loadRecipes()
// localStorage.setItem("recipes",JSON.stringify(recipes))



document.querySelector('#add-recipe').addEventListener(('click'), (e) => {;
    location.assign(`edit.html#${uuidv4()}`)
})