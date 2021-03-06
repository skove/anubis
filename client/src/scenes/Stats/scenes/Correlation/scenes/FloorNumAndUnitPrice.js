import React from 'react'
import { Scatter } from 'react-chartjs-2'

import ChartContainer from '../components/ChartContainer'
import CorrelationCoefficient from '../components/CorrelationCoefficient'
import SpearmanCoefficient from '../components/SpearmanCoefficient'
import ItemsCount from '../components/ItemsCount'
import withComparison from '../../../decorators/withComparison'

const View = withComparison(({ competitors }) => {
  const data = competitors
    .filter(c => c.floorNum)
    .map(c => ({ x: c.floorNum, y: c.price / c.size }))

  return (
    <div>

      <Scatter
        data={{ datasets: [{ data }] }}
        options={{ legend: { display: false } }}
      />
      <ItemsCount data={data} />
      <CorrelationCoefficient data={data} />
      <SpearmanCoefficient data={data} />
    </div>
  )
})

const FloorNumAndUnitPrice = ({ competitors }) => (
  <ChartContainer>
    <h2>x: <i>floor num</i>, y: <i>unit price</i></h2>
    <View competitors={competitors} />
  </ChartContainer>
)

export default FloorNumAndUnitPrice
