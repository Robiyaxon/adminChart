import { connect } from 'react-redux'
import { upDateProductAC, updateCustomerAC, upDateIncomeAC, upDateExpenceAC } from './../../../Redux/HomeReducer';
import InformationBlocks from './InformationBlocks';

let mapsStateToProps = (state) => {
          return {
                    product:state.home.product,
                    income:state.home.income,
                    expence:state.home.expence,
                    customers:state.home.customers
          }
}


export default connect(mapsStateToProps, {upDateProductAC, updateCustomerAC, upDateIncomeAC, upDateExpenceAC})(InformationBlocks)