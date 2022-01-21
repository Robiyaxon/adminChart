import { connect } from 'react-redux'
import { upDateNewNameAC, upDateNewEmailAC, upDateNewPasswordAC, UpdateIsAuthAC, LoginThunk } from './../../Redux/LoginReducer';
import Login from './Login';

let mapsStateToProps = (state) => {
          return {
                    name:state.login.addNewName,
                    email:state.login.addNewEmail,
                    password:state.login.addNewPassword,
                    isAuth:state.login.isAuth
          }
}


export default connect(mapsStateToProps, {upDateNewNameAC, upDateNewEmailAC, upDateNewPasswordAC, UpdateIsAuthAC, LoginThunk})(Login)