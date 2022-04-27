export const addCocktail = (cocktailType, amount) => ({
    type: "ADD_COCKTAIL",
    info: 'Add new drink',
    order: cocktailType,
    payload: amount,
})

export const addInitialCocktails = (data) => ({
    type: "ADD_INITIAL_COCKTAILS",
    payload: data
})

export const deleteCocktail = (cocktailToDelete) => ({
    type: "DELETE_COCKTAIL",
    info: 'Delete drink',
    payload: cocktailToDelete,
})