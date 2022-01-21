import axios from 'axios';


const PRODUCT = '/HOME/PRODUCT'
const INCOME = '/HOME/INCOME'
const EXPENCE = '/HOME/EXPENCE'
const CUSTOMERS = '/HOME/CUSTOMERS'

const initialState={
          product: '',
          income: '',
          expence: '',
          customers:''
}

export const HomeReducer =(state=initialState, action)=>{
          switch (action.type) {
                    case PRODUCT:
                              return {
                                  ...state,
                                  product: action.product
                              }
                          case INCOME:
                              return {
                                  ...state,
                                  income: action.income
                              }
                          case EXPENCE:
                              return {
                                  ...state,
                                  expence: action.expence
                              }
                          case CUSTOMERS:
                              return {
                                  ...state,
                                  customers: action.customers
                              }
                    default:
                              return state;
          }
}



export const upDateProductAC = (product) => ({ type: PRODUCT, product })
export const upDateIncomeAC = (income) => ({ type: INCOME, income })
export const upDateExpenceAC = (expence) => ({ type: EXPENCE, expence })
export const updateCustomerAC = (customers) => ({ type: CUSTOMERS, customers })
