import React from 'react';
import style from "./Title.module.css"
import Button from '@material-ui/core/Button'
import baby from "../../picture/title.jpg"
import { Redirect } from 'react-router-dom';
const ContentTitle = (props) => {
  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
}
  return (
    <div className={style.wrapper}>
      <div className={style.Title}>
        <div>
          <h1>Welcome back,</h1>
          <h1> Robiya To`xtayeva!</h1>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          </p>
          <Button variant="contained" color="secondary">
            Go Now
          </Button>
        </div>
        <div>
        </div>
      </div>
      <div className={style.CarouselNamePage} >
        <img alt="" src={baby} />
      </div>
      
    </div>
  );
};
export default ContentTitle;