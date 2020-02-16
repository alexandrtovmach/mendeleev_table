import React from "react"

import styles from "./element.module.scss"

const getOxidState = (value) => {
  if (value === "-") {
    return 0;
  } else {
    const numVal = value * 1;
    return numVal > 0? `+${value}`: value;
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
    <div className={styles.elementContainer} style={{
      backgroundColor: hexColor,
      gridColumn: group,
      gridRow: period
    }}>
      <div className={styles.main}>
        <span className={styles.symbol}>
          {symbol}
        </span>
        <span className={styles.number}>
          {number}
        </span>
      </div>
      <div className={styles.details}>
        <div className={styles.weightRow}>
          <span className={styles.weight}>
            {relativeAtomicWeight}
          </span>
          <span className={styles.oxidationState}>
            {getOxidState(stableOxidationState)}
          </span>
        </div>
        <div className={styles.names}>
          <p className={styles.mainName}>
            {rusName}
          </p>
          <p className={styles.secondaryName}>
            {engName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Element
