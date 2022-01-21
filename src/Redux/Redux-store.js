import { KassaReduser } from './KassaReduser';
import { BuyurtmalarReducer } from './BuyurtmalarReduser';
import { LoginReducer } from './LoginReducer';
import {
   reducer as formReducer
} from "redux-form"
import {  combineReducers,  createStore} from "redux";
import { HomeReducer } from './HomeReducer';
let reducers = combineReducers({
   buyurtma:BuyurtmalarReducer,
   kassa: KassaReduser, 
   login: LoginReducer,
   home: HomeReducer,
   form: formReducer
})
const store = createStore(reducers)
export default store