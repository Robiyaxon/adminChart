import React from 'react'
import style from './InformationBlocks.module.css'
import BarChartIcon from '@material-ui/icons/BarChart';
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';
import axios from 'axios';

const InformationBlocks = (props) => {

          const map3 = [
                    { id: 1, name: "Mahsulotlar", foiz: "+2.6%", summa: props.product },
                    { id: 2, name: "Kirim", foiz: "+0.2%", summa: props.income },
                    { id: 3, name: "Chiqim", foiz: "+1%", summa: props.expence },
                    { id: 4, name: "Mijozlar", foiz: "+1%", summa: "---" },
          ]

          const map4 = map3.map(a => <div key={a.id} className={style.blockBox}>
                    <div className={style.box}>
                              <p>{a.name}</p>
                              <div className={style.Gradus}>
                                        <TrendingUpSharpIcon className={style.TrendingUpSharp} />
                                        <p>{a.foiz}</p>
                              </div>


                              <h1 style={{ color: "white" }}>{a.summa}</h1>
                    </div>
                    <BarChartIcon style={{ color: "yellow" }} />
          </div>)

          const API_URL = "https://smart-savdo.uz/api/v1/"
          
          axios.get(API_URL + "amount-products/").then((res) => {
                    props.upDateProductAC(res.data.jami_mahsulotlar)
                    console.log(res.data.jami_mahsulotlar);
          })
          axios.get(API_URL + "income/").then((res) => {
                    props.upDateIncomeAC(res.data.data)
                    console.log(res.data.data)
          })
          axios.get(API_URL + "expence/").then((res) => {
                    props.upDateExpenceAC(res.data.data)
                    console.log(res.data.data);
          })
          return (
                    <div className={style.BlockBody}>
                              {map4}
                    </div>
          )
}

export default InformationBlocks