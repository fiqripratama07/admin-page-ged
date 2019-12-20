const initialState = {
    listTransaction: [],
    locations:[],
    loading: true,

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
    const {type, listTransaction, loading, showTransaction, locations ,addTransaction} = action;
    switch (type) {
        case 'LIST_TRANSACTION':
            return {...state, loading: true, listTransaction}
        case 'SAVE_TRANSACTION':
            return {...state, addTransaction}
        case 'LIST_LOCATION':
            return {...state,loading: true,locations}
        default:
            return state;
    }
}
