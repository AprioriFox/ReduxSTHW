
const initialState = {
    firstNum: 0,
    secondNum: 0,
    result:0
}



export default function reducer (state=initialState, action){

    if(action.type === "FIRST_NUMBER"){
        return {
            ...state,
            firstNum: action.payload
        }
    }
    else if(action.type === "SECOND_NUMBER"){
        return {
            ...state,
            secondNum: action.payload
        }
    }
    else if (action.type === "PLUS"){
        return {
            ...state,
            result: +state.firstNum + +state.secondNum
        }
    }
    else if (action.type === "MINUS"){
        return {
            ...state,
            result: +state.firstNum - +state.secondNum
        }
    }
    else if (action.type === "MULTI"){
        return {
            ...state,
            result: +state.firstNum * +state.secondNum
        }
    }
    else if (action.type === "DIVIS"){
        return {
            ...state,
            result: +state.firstNum / +state.secondNum
        }
    }

    return state
}