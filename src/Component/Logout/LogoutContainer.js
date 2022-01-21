import { connect } from 'react-redux'
import { UpdateIsAuthAC } from './../../Redux/LoginReducer';
import Logout from './../Logout/Logout';
let mapsStateToProps = (state) => {
          return {
                    isAuth:state.login.isAuth
          }
}


export default connect(mapsStateToProps, {UpdateIsAuthAC})(Logout)