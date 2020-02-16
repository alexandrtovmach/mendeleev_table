import React from "react"

import styles from "./element.module.scss"

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
      <div className={styles.symbolNumberRow}>
        <span className={styles.symbol}>
          {symbol}
        </span>
        <span className={styles.number}>
          {number}
        </span>
      </div>
      {/* {Object.keys(elData).map(key => (
        <p>
          {key}: {elData[key]}
        </p>
      ))} */}
    </div>
  )
}

export default Element
