
export const productReducer = ( state = [], action) => {

    switch (action.type) {

        case '[Product] - ADD-PRODUCT':
            return [
                ...state,
                action.payload
            ]
   
        case '[Product] - DELETE-PRODUCT':
            return action.payload


        case '[Product] - EDIT-PRODUCT':
            console.log('edit');
            break;
    
        default:
            return state

    }
}