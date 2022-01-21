const CHANGE_NAME = '/buyurtmalar/CHANGE_NAME'
const CHANGE_PRODUCT = '/buyurtmalar/CHANGE_PRODUCT'
const CHANGE_PRICE = '/buyurtmalar/CHANGE_PRICE'
const CHANGE_COMMENT = '/buyurtmalar/CHANGE_COMMENT'
const ADD_NEW_REPORT = '/buyurtmalar/ADD_NEW_REPORT'
const initialState = {
    addNewName: '',
    addNewProduct: '',
    addNewPrice: '',
    addNewComment: '',
    report: [
        { id: 1, name: 'osh', product: '23', price: "2 kg", comment: '200 ming '}
    ]
}

export const BuyurtmalarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                addNewName: action.addNewName
            }
        case CHANGE_PRODUCT:
            return {
                ...state,
                addNewProduct: action.addNewProduct
            }
        case CHANGE_PRICE:
            return {
                ...state,
                addNewPrice: action.addNewPrice
            }
        case CHANGE_COMMENT:
            return {
                ...state,
                addNewComment: action.addNewComment
            }
        case ADD_NEW_REPORT:
            let stateCopy = { ...state }
            let reportCopy = stateCopy.report = [...state.report]
            let addReport = {
                id: reportCopy.length + 1,
                name: action.addNewName1,
                product: action.addNewProduct1,
                price: action.addNewPrice1,
                comment: action.addNewComment1+ " ming",
                status:action.status
            }

            reportCopy.push(addReport)

            return stateCopy
        default:
            return state
    }
}

export const SetNameAC1 = (addNewName) => ({ type: CHANGE_NAME, addNewName })
export const SetProductAC1 = (addNewProduct) => ({ type: CHANGE_PRODUCT, addNewProduct })
export const SetPriceAC1 = (addNewPrice) => ({ type: CHANGE_PRICE, addNewPrice })
export const SetCommentAC1 = (addNewComment) => ({ type: CHANGE_COMMENT, addNewComment })
export const AddNewReportAC1 = (addNewName1, addNewProduct1, addNewPrice1, addNewComment1, status) => ({ type: ADD_NEW_REPORT, addNewName1, addNewProduct1, addNewPrice1, addNewComment1, status })