const generateRecipeDOM = (recipe) => {
    console.log(recipe.id);
    const recipeEl = document.createElement('a')
    const titleEl = document.createElement('span')
    const summaryEl = document.createElement('p')

    titleEl.textContent = recipe.title
    recipeEl.appendChild(titleEl)
    titleEl.classList.add('recipe-item__title')
    summaryEl.classList.add('recipe-item__subtitle')
    summaryEl.textContent = recipe.detail
    recipeEl.appendChild(summaryEl)

    recipeEl.href = `/edit.html#${recipe.id}`
    recipeEl.classList.add('recipe-item')
    return recipeEl
}
const renderRecipes = (recipes) => {
    const listEl = document.querySelector('#recipes')
    if(recipes.length > 0){
        recipes.forEach((recipe) => {
            const showRecipe = generateRecipeDOM(recipe)
            listEl.appendChild(showRecipe)
        })
    }
}

export { renderRecipes, generateRecipeDOM }