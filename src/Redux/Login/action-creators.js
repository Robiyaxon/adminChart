import axios from 'axios';
import {
  SET_AUTH,
  SET_ERROR,
  SET_IS_LOADING,
  SET_USER
} from './LoginReduser';
export const AuthActionCreators = {
  setUser: (user) => ({
    type: SET_USER,
    payload: user
  }),
  setIsAuth: (auth) => ({
    type: SET_AUTH,
    payload: auth
  }),
  setError: (payload) => ({
    type: SET_ERROR,
    payload
  }),
  setIsLoading: (payload) => ({
    type: SET_IS_LOADING,
    payload
  }),
  login: (userName, password) => async (dispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true))
      const mockUsers = await axios.get('./user.json')
      console.log(mockUsers);
    } catch (error) {
      dispatch(AuthActionCreators.setError("Error!"))
    }
  },
  logout: (userName, password) => async (dispatch) => {
    try {

    } catch (error) {

    }
  }
}