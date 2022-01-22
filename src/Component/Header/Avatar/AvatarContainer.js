import { connect } from 'react-redux'

import { UpdateIsAuthAC } from './../../../Redux/LoginReducer';
import LetterAvatars from './Avatar';

let mapsStateToProps = (state) => {
          return {
                    isAuth:state.login.isAuth
          }
}


export default connect(mapsStateToProps, {UpdateIsAuthAC})(LetterAvatars)