import {DECREASE_NUM, INCREASE_NUM} from "../actions/mockActions";


const initiallyState = {
    count: 0
}

export const mockReducer = (state = initiallyState, action) => {
        switch (action.type){
            case INCREASE_NUM:
                return {...state, count: state.count+=1}
            case DECREASE_NUM:
                return {...state, count: state.count-=1}
            default:
                return state
        }
}