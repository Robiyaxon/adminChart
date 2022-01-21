import { authAPI } from "../Api/Login";
let initialState = {
  username:"",
  email:"",
  tel:null,
  first_name:"",
  password:'',
  role:"",
  isAuth:false
};
const ReduserLogin = (state = initialState, action) => {
  switch (action.type) {
      case 'SN/auth/SET_USER_DATA':
      case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
          return {
              ...state,
              ...action.payload
          }
      default:
          return state;
  }
}
const setAuthUserData= (username, email, tel, first_name, password, role,isAuth) => ({
  type: 'SN/auth/SET_USER_DATA', payload: {username, email, tel, first_name, password, role, isAuth}
})
export const getAuthUserData = () => async (dispatch) => {
  let meData = await authAPI.me()
  if (meData.status ===200 ) {
      let {username, email, tel, first_name, password, role} = meData.data;
      dispatch(setAuthUserData(username, email, tel, first_name, password, role, true))
  }
}
// export const login = (username, email, tel, first_name, password, role) => async (dispatch) => {
//   let data = await authAPI.me(username, email, tel, first_name, password, role);
//   if (data.status === 200) {
//       dispatch(getAuthUserData())
//   } else {
//       // let message = data.messages.length > 0 ? data.messages[0] : "Some error";
//       // dispatch(stopSubmit("login", {_error: message}));
//       alert("xato malumot berildi")
//   }
// }
export default ReduserLogin;