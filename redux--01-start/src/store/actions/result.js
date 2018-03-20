import * as actionTypes from './actionTypes';

const saveResult = (value) => {
    const updatedResult = value * 2
    return {
        type: actionTypes.STORE_RESULT,
        value: updatedResult
    }
}
export const storeResult = (value) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
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