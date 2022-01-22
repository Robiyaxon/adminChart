import React, { useEffect, useState } from 'react'
import moduleName from './Kassa.module.module.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const API_URL = "https://smart-savdo.uz/api/v1/"

export const Kassa = (props) => {

  useEffect(() => {
    axios.get(API_URL + "expence-list/").then((res) => {
      return res.data.map(e => {
        props.AddNewReportAC('sdfdg', 'fsd', e.expense, e.descriptions, 'Chiqim')
      })
    })
    axios.get(API_URL + "income-list/").then((res) => {
      return res.data.map(e => {
        props.AddNewReportAC('sdfdg', 'fsd', e.income, e.descriptions, 'Kirim')
      })
    })
  }, []);

  const writeName = (event) => {
    let text = event.target.value
    props.SetNameAC(text)
  }
  const writeProduct = (event) => {
    let text = event.target.value
    props.SetProductAC(text)
  }
  const writePrice = (event) => {
    let text = event.target.value
    props.SetPriceAC(text)
  }
  const writeComment = (event) => {
    let text = event.target.value
    props.SetCommentAC(text)
  }

  const addNewReport = () => {
    const descriptions = props.addNewComment
    const income = props.addNewPrice
    axios.post(API_URL + "income/", { income, descriptions }).then((res)=>console.log(res.data))
    props.SetNameAC('')
    props.SetProductAC('')
    props.SetPriceAC('')
    props.SetCommentAC('')
    if (props.addNewName.length === '' || props.addNewProduct.length === '' || props.addNewPrice.length === '' || props.addNewComment === '') {
      setOpen(true);
    } else {
      props.AddNewReportAC(props.addNewName, props.addNewProduct, props.addNewPrice, props.addNewComment, 'Kirim')
    }
  }

  const addNewReport2 = () => {
    const descriptions = props.addNewComment
    const expense = props.addNewPrice

    axios.post(API_URL + "expence/", { descriptions, expense })
    props.SetNameAC('')
    props.SetProductAC('')
    props.SetPriceAC('')
    props.SetCommentAC('')
    if (props.addNewName.length === '' || props.addNewProduct.length === '' || props.addNewPrice.length === '' || props.addNewComment === '') {
      setOpen(true);
    } else {
      props.AddNewReportAC(props.addNewName, props.addNewProduct, props.addNewPrice, props.addNewComment, 'Chiqim')
    }

  }
  const reportMap = props.report.map(r => <div key={r.id} className={moduleName.report}>
    <h1 className={moduleName.name}>{r.name}</h1>
    <h1 className={moduleName.product}>{r.product}</h1>
    <h1 className={moduleName.price}>{r.price}</h1>
    <h1 className={moduleName.comment}>{r.comment}</h1>
    <button className={moduleName.status}>{r.status}</button>
  </div>
  )
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  if (!props.isAuth) {
    return <Redirect to={'/login'} />
  }

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">Qatorlarni to`ldiring</Alert>
      </Snackbar>
      <div className={moduleName.body}>
        <div className={moduleName.Kassa}>
          <div className={moduleName.inp_group}>
            <input onChange={writeName} value={props.addNewName} placeholder='Ism*' />
            <input onChange={writeProduct} value={props.addNewProduct} type="text" placeholder='Mahsulot*' />
            <input onChange={writePrice} value={props.addNewPrice} type="number" placeholder='Narxi* (so`mda)' />
            <input onChange={writeComment} value={props.addNewComment} type="text" placeholder='Izoh*' />
            <div className={moduleName.btn_group}>
              <button onClick={addNewReport}>Kirim</button>
              <button onClick={addNewReport2}>Chiqim</button>
            </div>
          </div>
          <div className={moduleName.report_body}>
            <h1 className={moduleName.title}>New report</h1>
            <div className={moduleName.th}>
              <p className={moduleName.name}>Ism</p>
              <p className={moduleName.product}>Mahsulot nomi</p>
              <p className={moduleName.price}>Narxi</p>
              <p className={moduleName.comment}>Izoh</p>
              <p className={moduleName.status}>Status</p>
            </div>
            <div>
              {reportMap}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
