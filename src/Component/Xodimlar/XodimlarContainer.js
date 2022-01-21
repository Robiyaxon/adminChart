import { connect } from 'react-redux'
import Xodimlar from './Xodimlar';

let mapsStateToProps = (state) => {
          return {
                    isAuth:state.login.isAuth
          }
}


export default connect(mapsStateToProps, {})(Xodimlar)