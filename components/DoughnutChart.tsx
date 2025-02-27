'use client'

import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip } from 'chart.js'

Chart.register(ArcElement, Tooltip)

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500, 3750],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
      },
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3'],
  }

  return (
    <Doughnut
      data={data}
      options={{
        cutout: '60%',
      }}
    />
  )
}

export default DoughnutChart
