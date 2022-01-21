import { connect } from "react-redux";
import ContentTitle from "./ContentTitle";
let mapsStateToProps=(state)=>{
  return{ 
    isAuth: state.login.isAuth
  }}
  export default  connect(mapsStateToProps, {})(ContentTitle)
