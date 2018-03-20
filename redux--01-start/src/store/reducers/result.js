import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            console.log('[STORE_RESULT]');
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.value})
            }
        case actionTypes.DELETE_RESULT:
            console.log('[DELETE_RESULT]');
            const updatedArray = state.results.filter(result => result.id !== action.value);
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
};

export default reducer;