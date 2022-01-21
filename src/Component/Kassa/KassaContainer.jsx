import { connect } from "react-redux";
import { compose } from "redux";
import { Kassa } from './Kassa';
import { SetProductAC, SetPriceAC, SetNameAC, SetCommentAC, AddNewReportAC  } from './../../Redux/KassaReduser';
let mapsStateToProps=(state)=>{
  return{ 
    addNewName:state.kassa.addNewName,
    addNewProduct:state.kassa.addNewProduct,
    addNewPrice:state.kassa.addNewPrice,
    addNewComment:state.kassa.addNewComment,
    report:state.kassa.report,
    isAuth: state.login.isAuth
  }}
  export default compose( connect(mapsStateToProps, {SetNameAC, SetProductAC, SetPriceAC, SetCommentAC, AddNewReportAC}) )(Kassa)
