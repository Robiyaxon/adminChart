import { connect } from 'react-redux';
import Navbar23 from './Navbar23';
let MapsStateToProps = (state) => {
  return {
    isAuth: state.login.isAuth
  };
};
export default connect(MapsStateToProps, {})(Navbar23);