import React from 'react'
import { Route } from 'react-router-dom'
import style from "../../Title/Title.module.css"
import BuyurtmalarComponent from '../../Buyurtmalar/BuyurtmalarComponent'
import KassaContainer from '../../Kassa/KassaContainer'
import DiagrammaContainer from '../../Home/DiagrammaContainer'
import TitlecONTAINERJSX from '../../Title/TitleContainer.jsx'
import LogoutContainer from '../../Logout/LogoutContainer'
import XodimlarContainer from '../../Xodimlar/XodimlarContainer'
export function Content(classes, open, props) {
  let a = open ? style.dNone : null
  return (
    <React.Fragment >
      <main className={a + " " + classes.content}  >
        <div className={classes.toolbar} />
          <TitlecONTAINERJSX isAuth={props.isAuth} />
          <Route path='/Chart' exact render={() => <DiagrammaContainer />} />
          <Route path='/buyurtmalar' render={() => <BuyurtmalarComponent />} />
          <Route path='/kassa' render={() => <KassaContainer />} />
          <Route path='/xodimlar' render={() => <XodimlarContainer />} />
          <Route path='/chiqish' render={() => <LogoutContainer/>} />
      </main>
    </React.Fragment>
  )
}
