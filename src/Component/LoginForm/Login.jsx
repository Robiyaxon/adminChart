import { Row } from 'antd'
import style from "./Login.module.css"
import Layout from 'antd/lib/layout/layout'
import { LoginForm } from './LoginForm';
import { Redirect } from 'react-router-dom';
const Login = (props) => {
      if (props.isAuth) {
            return <Redirect to={'/Chart'} />
      }
      return (
            <div className={style.Login}>
                  <Layout style={{ backgroundColor: "transparent", color: "white" }}>
                        <Row justify='center' align='middle'>
                              <LoginForm prop={props} />
                        </Row>
                  </Layout>
            </div>
      )
}
export default Login