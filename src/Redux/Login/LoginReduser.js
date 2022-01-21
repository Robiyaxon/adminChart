export const SET_AUTH="SET_AUTH"
export const SET_ERROR="SET_ERROR"
export const SET_USER="SET_USER"
export const SET_IS_LOADING="SET_IS_LOADING"
export const initialstate={
isAuth:false,
error:"",
isLoading:false,
user:null,

}
export default function LoginReduser(state=initialstate, action) {
          switch (action.type) {
                    case SET_AUTH:
                              return {...state, isAuth:action.payload, isLoading:false };
                    case SET_USER:
                              
                              return {...state, user:action.payload};
                    case SET_ERROR:
                              return {...state, error:action.payload,isLoading:false};
                    case SET_IS_LOADING:
                              return {...state, isLoading:action.payload};
          
                    default: return state;
          }
}
