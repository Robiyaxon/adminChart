import React from 'react';
import { Route } from 'react-router-dom';
import "./App.css"
import { BackToTop } from './BackToTop';
import LoginConatiner from './Component/LoginForm/LoginContainer';
import NavbarContainer from './Component/NavbarContainer';
import LoginUserContainer from './Component/LoginForm/LoginUser';
const App = () => {
  return (
    <div>
    {/* < BackToTop/> */}
    <NavbarContainer/>
      <Route path='/login' render={() => <LoginUserContainer />} />
  </div>
  );
};
export default App;