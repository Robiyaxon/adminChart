import React from 'react';
import style from "./Diagramma.module.css"
import { Line } from 'react-chartjs-2';
import faker from 'faker';

import InformationBlocksContainer from './InformationBlocks/InformationBlocksContainer';
import { Redirect } from 'react-router-dom';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
};

const labels = ['yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Oct', 'Noy', 'Dek'];

export const data = {
  labels,
  datasets: [
    {
      label: "kirim",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      borderColor: 'gold'
    },
    {
      label: "chiqim",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      borderColor: 'red',
    },
  ],
}

export function Diagramma(props) {
    if (!props.isAuth) {
      return <Redirect to={'/login'}/>
  }

  return (
    <>
      <InformationBlocksContainer />
      <div className={style.block}>
        <div className={style.wrapper}>
          <Line options={options} data={data} />
        </div>
      </div></>)
}