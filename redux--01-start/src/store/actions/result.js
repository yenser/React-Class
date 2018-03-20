import * as actionTypes from './actionTypes';

const saveResult = (value) => {
    return {
        type: actionTypes.STORE_RESULT,
        value: value
    }
}
export const storeResult = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(value))
        }, 2000);
    }
};
export const deleteResult = (value) => {
    return {
        type: actionTypes.DELETE_RESULT,
        value: value
    };
};