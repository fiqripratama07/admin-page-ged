const initialState = {
    listTransaction: [],
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
    }
}


export default function PostOperatorReducer(state = initialState, action) {
    const {type, listTransaction, loading, showTransaction, addTransaction} = action;
    switch (type) {
        case 'LIST_TRANSACTION':
            return {...state, loading: true, listTransaction}
        case 'SAVE_TRANSACTION':
            return {...state, addTransaction}
        default:
            return state;
    }
}
