import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
          if (props.isAuth) {
                    props.UpdateIsAuthAC(false)
                    return <Redirect to={'/login'} />
          }
          return (
                    <div>

                    </div>
          );
};

export default Logout;