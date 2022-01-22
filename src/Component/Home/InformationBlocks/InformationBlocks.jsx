import React from 'react'
import style from './InformationBlocks.module.css'
import BarChartIcon from '@material-ui/icons/BarChart';
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';
import axios from 'axios';

const InformationBlocks = (props) => {

          const map3 = [
                    { id: 1, name: "Mahsulotlar",summa: props.product+" uzs" },
                    { id: 2, name: "Kirim", summa: props.income+" uzs" },
                    { id: 3, name: "Chiqim", summa: props.expence +" uzs" },
                    { id: 4, name: "Mijozlar", summa: "---" },
          ]

          const map4 = map3.map(a => <div key={a.id} className={style.blockBox}>
                    <div className={style.box}>
                              <p>{a.name}</p>
                              <h1 style={{ color: "white" }}>{a.summa}</h1>
                    </div>
                    <BarChartIcon style={{ color: "yellow" }} />
          </div>)

          const API_URL = "https://smart-savdo.uz/api/v1/"
          
          axios.get(API_URL + "amount-products/").then((res) => {
                    props.upDateProductAC(res.data.jami_mahsulotlar)
          })
          axios.get(API_URL + "income/").then((res) => {
                    props.upDateIncomeAC(res.data.data)
          })
          axios.get(API_URL + "expence/").then((res) => {
                    props.upDateExpenceAC(res.data.data)
          })
          return (
                    <div className={style.BlockBody}>
                              {map4}
                    </div>
          )
}

export default InformationBlocks