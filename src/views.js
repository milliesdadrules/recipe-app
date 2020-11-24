// //import { loadRecipes } from "./recipes"
// import { getRecipes } from './index'
// const generateRecipeDOM = (recipe) => {
//     const recipeEl = document.createElement('a')
//     const titleEl = document.createElement('span')
//     const summaryEl = document.createElement('p')

//     titleEl.textContent = recipe.title
//     recipeEl.appendChild(titleEl)

//     summaryEl.textContent = recipe.detail
//     recipeEl.appendChild(summaryEl)

//     recipeEl.href = `/edit.html#${recipe.id}`

//     return recipeEl
// }

// const renderRecipes = ()=>{
//     const recipes = loadRecipes()
//     const listEl = document.querySelector('#recipes')
//     console.log(getRecipes().length);
//     if(recipes.length > 0){
//         recipes.forEeach((recipe) =>{
//             const showRecipe = generateRecipeDOM(recipe)
//             listEl.appendChild(showRecipe)
//         })
//     }
// }

// console.log(getRecipes(), 'views');
// export { renderRecipes, generateRecipeDOM }