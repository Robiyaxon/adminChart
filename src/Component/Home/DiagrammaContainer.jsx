import { connect } from "react-redux";
import { Diagramma } from './Diagramma';
let mapsStateToProps=(state)=>{
  return{ 
    isAuth: state.login.isAuth
  }}
  export default  connect(mapsStateToProps, {})(Diagramma)
