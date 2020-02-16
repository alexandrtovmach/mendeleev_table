import React from "react"
import classNames from "classnames"

import styles from "./element.module.scss"

const getOxidState = value => {
  if (value === "-") {
    return 0
  } else {
    const numVal = value * 1
    return numVal > 0 ? `+${value}` : value
  }
}

const getPositionStyles = ({ number, group, period }) => {
  const isLantanoid = number >= 58 && number <= 71
  const isActinoid = number >= 90 && number <= 103
  const groupGap = isLantanoid
    ? Number(number) - 57
    : isActinoid
    ? Number(number) - 89
    : 0
  const periodGap = Number(isLantanoid || isActinoid) * 3
  return {
    gridColumn: Number(group) + groupGap,
    gridRow: Number(period) + periodGap,
  }
}

const Element = ({
  number,
  symbol,
  rusName,
  engName,
  latName,
  boilK,
  meltK,
  boilC,
  meltC,
  relativeAtomicWeight,
  type,
  group,
  period,
  discoveredAt,
  discoveredBy,
  electronegativity,
  atomicRadius,
  electronicConfiguration,
  outerElectronicConfiguration,
  sort,
  stableOxidationState,
  allOxidationStates,
  density,
  firstIonizationPotential,
  color,
  hexColor,
  amountInWorld,
  amountInSeawater,
  amountInAir,
  radioactivity,
}) => {
  return (
    <div
      className={classNames(styles.elementContainer, {
        [styles.lanthanum]: Number(number) === 57,
        [styles.actinium]: Number(number) === 89,
        [styles.cerium]: Number(number) === 58,
        [styles.thorium]: Number(number) === 90,
      })}
      style={{
        backgroundColor: hexColor,
        ...getPositionStyles({ number, group, period }),
      }}
    >
      <div className={styles.main}>
        <span className={styles.symbol}>{symbol}</span>
        <span className={styles.number}>{number}</span>
      </div>
      <div className={styles.details}>
        <div className={styles.weightRow}>
          <span className={styles.weight}>{relativeAtomicWeight}</span>
          <span className={styles.oxidationState}>
            {getOxidState(stableOxidationState)}
          </span>
        </div>
        <div className={styles.names}>
          <p className={styles.mainName}>{rusName}</p>
          <p className={styles.secondaryName}>{engName}</p>
        </div>
      </div>
    </div>
  )
}

export default Element
