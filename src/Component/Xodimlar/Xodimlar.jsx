import React from 'react'
import { Redirect } from 'react-router-dom';

const Xodimlar = (props) => {
          if (!props.isAuth) {
                    return <Redirect to={'/login'} />
          }
          return (
                    <div style={{color:"gold", fontSize:"30px", textAlign:"center", marginTop:"2rem"}}>
                              Xodimlar mavjud emas!
                    </div>
          );
};

export default Xodimlar;