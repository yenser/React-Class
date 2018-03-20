import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    return state.results.filter(result => result.id !== action.value);
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            console.log('[STORE_RESULT]');
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.value})})
        case actionTypes.DELETE_RESULT:
            console.log('[DELETE_RESULT]');
            return updateObject(state, {results: deleteResult(state,action)});
        default:
            return state;
    }
};

export default reducer;