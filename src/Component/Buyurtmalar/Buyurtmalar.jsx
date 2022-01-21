import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import moduleName from './Buyurtmalar.module.css'
import { Redirect } from 'react-router-dom';

function Alert(props) {
 
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
 const Buyurtmalar = (props) => {
  
  const writeName = (event) => {
    let text = event.target.value
    props.SetNameAC1(text)
  }
  const writeProduct = (event) => {
    let text = event.target.value
    props.SetProductAC1(text)
  }
  const writePrice = (event) => {
    let text = event.target.value
    props.SetPriceAC1(text)
  }
  const writeComment = (event) => {
    let text = event.target.value
    props.SetCommentAC1(text)
  }


  const addNewReport = () => {
    props.SetNameAC1('')
    props.SetProductAC1('')
    props.SetPriceAC1('')
    props.SetCommentAC1('')

    if (props.addNewName.length === 0 || props.addNewProduct.length === 0 || props.addNewPrice.length === 0 || props.addNewComment === 0) {
      setOpen(true);
    } else {
      props.AddNewReportAC1(props.addNewName, props.addNewProduct, props.addNewPrice, props.addNewComment)
    }
  }
  const reportMap = props.report.map(r => <div key={r.id} className={moduleName.report}>
    <h1 className={moduleName.name}>{r.name}</h1>
    <h1 className={moduleName.product}>{r.product}</h1>
    <h1 className={moduleName.price}>{r.price}</h1>
    <h1 className={moduleName.comment}>{r.comment}</h1>
  </div>
  )
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
}
  return (
    <>
     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
     <Alert severity="error">Qatorlarni to`ldiring!</Alert>
      </Snackbar>
     <div className={moduleName.body}>
      <div className={moduleName.Kassa}>
        <div className={moduleName.inp_group}>
          <input onChange={writeName} value={props.addNewName} placeholder='Nomi*' />
          <input onChange={writeProduct} value={props.addNewProduct} type="text" placeholder='Stol raqami*' />
          <input onChange={writePrice} value={props.addNewPrice} type="text" placeholder='Miqdori*' />
          <input onChange={writeComment} value={props.addNewComment} type="number" placeholder='Narxi sumda*' />
          <div className={moduleName.btn_group}>
            <button onClick={addNewReport}>Send</button>
          </div>
        </div>
        <div className={moduleName.report_body}>
          <h1 className={moduleName.title}>Buyurtmalar</h1>
          <div className={moduleName.th}>
            <p className={moduleName.name}>Nomi</p>
            <p className={moduleName.product}>Stol raqami</p>
            <p className={moduleName.price}>Miqdori</p>
            <p className={moduleName.comment}>Narxi sumda</p>
          </div>
            {reportMap}
        </div>
      </div>
    </div>
    </>
   
  );
};
export default Buyurtmalar