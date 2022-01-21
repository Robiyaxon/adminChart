import { useState } from 'react';
import { Row } from 'antd'
import style from "./Login.module.css"
import Layout from 'antd/lib/layout/layout'
import logo from "../../picture/logo24.png";
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import axios from 'axios';
import { Input } from "../../FormControlls/Teaxtaera";
import { Recuerd, MaxlightCreator } from "../../FormControlls/FormControls";
import { connect } from 'react-redux'
import { upDateNewNameAC, upDateNewEmailAC, upDateNewPasswordAC, UpdateIsAuthAC, LoginThunk } from './../../Redux/LoginReducer';
const API_URL = "https://smart-savdo.uz/api/v1/";

export const LoginUser = (props) => {
 const [error, setError] = useState('');
  if (props.isAuth) {
    return <Redirect to={'/Chart'} />
  }
  const Send = ({ username, password }) => {
    // debugger
    return axios.post(API_URL + "login/", {
      username, password
    }).then((res) => {
      if (res.data.token) {
        console.log(res);
        if (!props.isAuth) {
          debugger
          props.UpdateIsAuthAC(true)
          return <Redirect to={'/Chart'} />
        }
      } else if(res.data.ok == false) {
        console.log("Hello world");
        setError(res.data.data);
      }
      return res.data
    }).catch(res => {
      // console.log(res.data.error[0]);
    })
  }
  return (
    <>
      <div className={style.Login}>
        <Layout style={{ backgroundColor: "transparent", color: "white" }}>
          <Row justify='center' align='middle'>
            <h1 style={{ width: "100%" }} className={style.error}>  {error}</h1>
            <div className={style.Wrapper}>
              <h1>Zapraszamy</h1>

              <BookingReduxForm onSubmit={Send} />
              <img src={logo} alt="" />

            </div>
          </Row>
        </Layout>
      </div>

    </>

  );
};
const maxligh10 = MaxlightCreator(200)
const Formcontrol = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field className={style.Input1}
        name="username"
        component={Input}
        validate={[Recuerd, maxligh10]}
        placeholder="username" />
      <Field className={style.Input1}
        name="password"
        component={Input}
        validate={[Recuerd, maxligh10]}
        placeholder="password" />
      <button className={style.button34}>Kirish</button>
    </form>
  )

}
const BookingReduxForm = reduxForm({
  form: 'loginme'
})(Formcontrol)

let mapsStateToProps = (state) => {
          return {
                    name:state.login.addNewName,
                    email:state.login.addNewEmail,
                    password:state.login.addNewPassword,
                    isAuth:state.login.isAuth
          }
}


export default connect(mapsStateToProps, {upDateNewNameAC, upDateNewEmailAC, upDateNewPasswordAC, UpdateIsAuthAC, LoginThunk})(LoginUser)