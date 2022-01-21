
import authReducer from "./ReduserLogin";
import { reducer as formReducer } from "redux-form"
const { createStore, combineReducers } = require("redux");
let redusers = combineReducers({
          login: authReducer,
          form: formReducer
})
const store = createStore(redusers)
export default store;
window.store = store;