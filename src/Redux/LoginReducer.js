import axios from 'axios';


const ADD_NEW_NAME = '/LOGIN/ADD_NEW_NAME'
const ADD_NEW_EMAIL = '/LOGIN/ADD_NEW_EMAIL'
const ADD_NEW_PASSWORD = '/LOGIN/ADD_NEW_PASSWORD'
const UPDATE_IS_AUTH = '/LOGIN/UPDATE_IS_AUTH'

const initialState={
          addNewName: '',
          addNewEmail: '',
          addNewPassword: '',
          isAuth:false
}

export const LoginReducer =(state=initialState, action)=>{
          switch (action.type) {
                    case ADD_NEW_NAME:
                              return {
                                  ...state,
                                  addNewName: action.addNewName
                              }
                          case ADD_NEW_EMAIL:
                              return {
                                  ...state,
                                  addNewEmail: action.addNewEmail
                              }
                          case ADD_NEW_PASSWORD:
                              return {
                                  ...state,
                                  addNewPassword: action.addNewPassword
                              }
                          case UPDATE_IS_AUTH:
                              return {
                                  ...state,
                                  isAuth: action.isAuth
                              }
                    default:
                              return state;
          }
}



export const upDateNewNameAC = (addNewName) => ({ type: ADD_NEW_NAME, addNewName })
export const upDateNewEmailAC = (addNewEmail) => ({ type: ADD_NEW_EMAIL, addNewEmail })
export const upDateNewPasswordAC = (addNewPassword) => ({ type: ADD_NEW_PASSWORD, addNewPassword })
export const UpdateIsAuthAC = (isAuth) => ({ type: UPDATE_IS_AUTH, isAuth })

const API_URL = "http://164.90.177.206:8001/api/v1/";
export const LoginThunk = ({username, email, tel, first_name, password, role}) => {
  return axios.post(API_URL + "register/", {
    username, email, tel, first_name, password, role
  }).then((res) => {
    if (res.data.token) {
      console.log(res);
    }
    console.log(res.data);
  })
};