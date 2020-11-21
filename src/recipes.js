const loadRecipes = () =>{
    const storedRecipes = localStorage.getItem('recipes')
    if(recipes){
        return recipes = JSON.parse(storedRecipes)
    } else {
        return {
            id: '',
            title: '',
            summary: '',
            ingredients: ''
        }
    }
}

export { loadRecipes}