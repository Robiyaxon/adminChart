import { useState } from 'react';
import style from "./Login.module.css";
import logo from "../../picture/logo24.png";
import { Redirect, NavLink } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import axios from 'axios';
import { Input } from "../../FormControlls/Teaxtaera";
import { Recuerd, MaxlightCreator } from "../../FormControlls/FormControls";
const API_URL = "http://164.90.177.206:8001/api/v1/";
export const LoginForm = (props) => {
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const Send = ({ username, email, tel, first_name, password, role }) => {
    // debugger
    return axios.post(API_URL + "register/", {
      username, email, tel, first_name, password, role
    }).then((res) => {
      if (res.data.token) {
        console.log(res);
      } else {
        if (res.data.status == "203                    NON AUTHORITATIVE INFORMATION") {
          if (res.data.error.email) {
            setError2(res.data.error.email[0]);
          }
          if (res.data.error.username) {
            setError(res.data.error.username[0]);
          }
        } else {
          if (res.data.user.username) {
            setError("")
          }
          if (res.data.user.email) {
            setError2("")
          }
        }
        if (res.data.status.code == "200 OK") {
          if (!props.prop.isAuth) {
            debugger
            props.prop.UpdateIsAuthAC(true)
            return <Redirect to={'/Chart'} />
          }
        }



        // user.username
        // user.email




      }

      return res.data
    }).catch(res => {
      // console.log(res.data.error[0]);
    })
  }
  return (
    <>
    
     <h1 style={{ width: "100%" }} className={style.error}>  {error}</h1>
      <h1 style={{ width: "100%" }} className={style.error}>  {error2}</h1>
     <div className={style.Wrapper}>
      <h1>Zapraszamy</h1>
  
      <BookingReduxForm onSubmit={Send} />
      <img src={logo} alt="" />
     
    </div>
    </>
   
  );
};
const maxligh10 = MaxlightCreator(200)
const Formcontrol = (props) => {
  const onClick =()=>{
    return <Redirect to={'/loginme'} />
  }
  return (
    <form onSubmit={props.handleSubmit}>
      <Field className={style.Input1}
        name="username"
        component={Input}
        validate={[Recuerd, maxligh10]}
        placeholder="username" />
      <Field className={style.Input1}
        name="email"
        component={Input}
        validate={[Recuerd, maxligh10]}
        placeholder="email" />
      <Field className={style.Input1}
        name="tel"
        component={Input}
        validate={[Recuerd, maxligh10]}
        placeholder="tel" />
      <Field className={style.Input1}
        name="first_name"
        component={Input}
        validate={[Recuerd, maxligh10]}
        placeholder="first_name" />
      <Field className={style.Input1}
        name="password"
        component={Input}
        validate={[Recuerd, maxligh10]}
        placeholder="password" />
      {/* <Field className={style.Input1}
        name="role"
        component={Input}
        validate={[Recuerd, maxligh10]}
        placeholder="role" /> */}
  <div>
    <Field name="role" component="select"  className={style.Input1}>
      <option>Kasbingizni tanlang</option>
      <option value="Rahbar">Rahbar</option>
      <option value="Menejer">Menejer</option>
      <option value="Hodim">Hodim</option>
    </Field>
  </div>

      <button className={style.button34}>royhatdan otish</button>
      yoki   
      <NavLink to="/loginme" className={style.button35} onClick={onClick}>Kirish</NavLink>
    </form>
  )

}
const BookingReduxForm = reduxForm({
  form: 'login'
})(Formcontrol)