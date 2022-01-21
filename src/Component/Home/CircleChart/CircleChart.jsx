
import React from "react";
import { Doughnut } from "react-chartjs-2";
import moduleName from './CircleChart.module.css'
const data = {
datasets: [
  {
    data: [30, 20, 15, 25],
    backgroundColor: [
      "green",
      "red",
      "yellow",
      "blue",
    ],
  }
],

};

function CircleChart() {
  return (
      <div>
                <h2 className={moduleName.title} >Xodimlar</h2>
        <Doughnut data={data} />
        <div className={moduleName.smNone}>
                  <p>Web</p>
                  <p>Ios</p>
                  <p>Frontend</p>
                  <p>Backend</p>

        </div>
      </div>
  );
}
export default CircleChart
