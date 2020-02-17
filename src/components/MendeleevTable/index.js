import React from "react"

import { Element } from "../"
import styles from "./table.module.scss"

const getOxidState = value => {
  if (value === "-") {
    return 0
  } else {
    const numVal = value * 1
    return numVal > 0 ? `+${value}` : value
  }
}

const getPosition = ({
  isLantanoid,
  isActinoid,
  periodicalNumber,
  group,
  period,
}) => {
  const groupGap = isLantanoid
    ? Number(periodicalNumber) - 57
    : isActinoid
    ? Number(periodicalNumber) - 89
    : 0
  const periodGap = Number(isLantanoid || isActinoid) * 3
  return {
    xPos: Number(group) + groupGap,
    yPos: Number(period) + periodGap,
  }
}

const isSemimetalCheck = periodicalNumber => {
  return [5, 14, 32, 33, 51, 52, 84, 85].includes(Number(periodicalNumber))
}

const getRelativeAtomicWeight = weight => {
  return Number(weight) % 1 ? weight : `[${weight}]`
}

const Table = ({ elements }) => {
  return (
    <div className={styles.tableContainer}>
      {elements &&
        elements.map(
          ({
            node: {
              id,
              periodicalNumber,
              symbol,
              relativeAtomicWeight,
              stableOxidationState,
              rusName,
              engName,
              hexColor,
              group,
              period,
            },
          }) => {
            const isSemimetal = isSemimetalCheck(periodicalNumber)
            const isLantanoid = periodicalNumber >= 58 && periodicalNumber <= 71
            const isActinoid = periodicalNumber >= 90 && periodicalNumber <= 103
            const weight = getRelativeAtomicWeight(relativeAtomicWeight)
            const oxidState = getOxidState(stableOxidationState)
            const { xPos, yPos } = getPosition({
              isLantanoid,
              isActinoid,
              periodicalNumber,
              group,
              period,
            })
            return (
              <Element
                key={id}
                periodicalNumber={periodicalNumber}
                xPos={xPos}
                yPos={yPos}
                symbol={symbol}
                mainName={rusName}
                secondaryName={engName}
                relativeAtomicWeight={weight}
                stableOxidationState={oxidState}
                hexColor={hexColor}
                isSemimetal={isSemimetal}
                isLantanoid={isLantanoid}
                isActinoid={isActinoid}
              />
            )
          }
        )}
    </div>
  )
}

export default Table
