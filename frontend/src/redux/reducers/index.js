const initialState = {
    drinks: []
}

const cocktailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COCKTAIL':
            console.log(action.order);
            return {
                ...state,
                drinks: state.drinks.concat(action.order)
            }
            case 'ADD_INITIAL_COCKTAILS':
                return {
                    ...state,
                    drinks: action.payload
                }
                case "DELETE_COCKTAIL":
                    let drinkToDelete = action.payload;
                    let drinksCopy = [...state.drinks]
                    let id = state.drinks.findIndex((drink) => drink.name === drinkToDelete.name);
                    drinksCopy.splice(id, 1)
                    return {
                        ...state,
                        drinks: drinksCopy
                    }
                    default:
                        return state;
    }
}
export default cocktailReducer;