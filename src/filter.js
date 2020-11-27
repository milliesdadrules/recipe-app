const recipeFilter = {
    searchText: ""
}

const getFilters = () => recipeFilter

const setFilters = ({ searchText}) => {
    if (typeof searchText === 'string'){
        recipeFilter.searchText = searchText
    }
}

export { getFilters, setFilters }
