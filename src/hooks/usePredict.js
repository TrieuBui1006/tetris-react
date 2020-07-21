import { useState, useEffect } from 'react'
import { createPredict } from '../gameHelpers'

export const usePredict = (playerPredict) => {
  const [predict, setPredict] = useState(createPredict())

  useEffect(() => {
    const updatePredict = (prevPredict) => {
      const newPredict = prevPredict.map((row) =>
        row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      )
      playerPredict.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newPredict[y + playerPredict.pos.y][x + playerPredict.pos.x] = [
              value,
              'clear',
            ]
          }
        })
      })

      return newPredict
    }
    setPredict((prev) => updatePredict(prev))
  }, [playerPredict])

  return [predict, setPredict]
}
