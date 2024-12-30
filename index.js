const redux = require('redux')

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(qty=1){
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}
function orderIcecream(){
    return {
        type: ICECREAM_ORDERED,
        payload: 1
    }
}

function restockIcecream(qty=1){
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

const cakeInitialState = {
    numOfCakes: 10
}
const icecreamInitialState = {
    numOfIcecream: 5
}

const cakeReducer = (state = cakeInitialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }  
        default:
            return state
    }
}
const icecreamReducer = (state = icecreamInitialState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream + action.payload
            }  
        default:
            return state
    }
}

const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = redux.createStore(rootReducer)
console.log("Initial state: ", store.getState())

const unsubscribe = store.subscribe(() => console.log('updated state: ', store.getState()))
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(5))

const actions = redux.bindActionCreators({ orderCake, restockCake, orderIcecream, restockIcecream }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(5)
actions.orderIcecream()
actions.orderIcecream()
actions.restockIcecream(4)

unsubscribe()