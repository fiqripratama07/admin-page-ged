const initialState = {
    listTransactions: [],
    locations:[],
    loading: true,
    people:[],
    showTransaction: {
        totalPrice: null,
        originName: "",
        addressesOrigin: null,
        destinationName: "",
        addressesDestination: "",
        packagesId: null,
        trackingId: null,
        operatorId: null,
        status: "",
        createTime: ""
    },

    addTransaction: {
        originName: "",
        addressesOrigin: null,
        destinationName: "",
        addressesDestination: "",
        packagesId: null,
    },
}


export default function PostOperatorReducer(state = initialState, action) {
    console.log("reducer", action)
    const {type, listTransaction, loading, showTransaction, locations ,addTransaction, payload} = action;
    switch (type) {
        case 'LIST_TRANSACTION':
            return {...state, loading: true, listTransaction:payload}
        case 'SAVE_TRANSACTION':
            return {...state, addTransaction}
        case 'LIST_LOCATION':
            return {...state,loading: true,locations}
        case 'LIST_PEOPLE':
            return {...state, loading: true, people:payload}
        default:
            return state;
    }
}
