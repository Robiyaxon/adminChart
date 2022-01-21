const CHANGE_NAME = '/Kassa/CHANGE_NAME'
const CHANGE_PRODUCT = '/Kassa/CHANGE_PRODUCT'
const CHANGE_PRICE = '/Kassa/CHANGE_PRICE'
const CHANGE_COMMENT = '/Kassa/CHANGE_COMMENT'
const ADD_NEW_REPORT = '/Kassa/ADD_NEW_REPORT'

const initialState = {
    addNewName: '',
    addNewProduct: '',
    addNewPrice: '',
    addNewComment: '',
    report: [
        { id: 1, name: 'chef', product: 'qoshiq', price: 12000 + ' so`m', comment: 'Qoshiq yetishmayapti', status:'Chiqim' }
    ]
}

export const KassaReduser = (state = initialState, action) => {
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
                price: action.addNewPrice1 + " so`m",
                comment: action.addNewComment1,
                status:action.status
            }

            reportCopy.push(addReport)

            return stateCopy
        default:
            return state
    }
}

export const SetNameAC = (addNewName) => ({ type: CHANGE_NAME, addNewName })
export const SetProductAC = (addNewProduct) => ({ type: CHANGE_PRODUCT, addNewProduct })
export const SetPriceAC = (addNewPrice) => ({ type: CHANGE_PRICE, addNewPrice })
export const SetCommentAC = (addNewComment) => ({ type: CHANGE_COMMENT, addNewComment })
export const AddNewReportAC = (addNewName1, addNewProduct1, addNewPrice1, addNewComment1, status) => ({ type: ADD_NEW_REPORT, addNewName1, addNewProduct1, addNewPrice1, addNewComment1, status })