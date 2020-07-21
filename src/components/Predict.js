import React from 'react'
import { StyledPredict } from './styles/styledPredict'

import Cell from './Cell'

const Predict = ({ predict }) => {
  return (
    <StyledPredict width={predict[0].length} height={predict.length}>
      {predict.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </StyledPredict>
  )
}

export default Predict
