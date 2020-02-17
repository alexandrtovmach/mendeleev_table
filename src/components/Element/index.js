import React from "react"
import classNames from "classnames"

import styles from "./element.module.scss"

const Element = ({
  periodicalNumber,
  symbol,
  mainName,
  secondaryName,
  relativeAtomicWeight,
  xPos,
  yPos,
  stableOxidationState,
  hexColor,
  isSemimetal,
}) => {
  return (
    <div
      className={classNames(styles.elementContainer, {
        [styles.lanthanum]: Number(periodicalNumber) === 57,
        [styles.actinium]: Number(periodicalNumber) === 89,
        [styles.cerium]: Number(periodicalNumber) === 58,
        [styles.thorium]: Number(periodicalNumber) === 90,
        [styles.semimetal]: isSemimetal,
      })}
      style={{
        backgroundColor: hexColor,
        gridColumn: xPos,
        gridRow: yPos,
      }}
    >
      <div className={styles.main}>
        <span className={styles.symbol}>{symbol}</span>
        <span className={styles.periodicalNumber}>{periodicalNumber}</span>
      </div>
      <div className={styles.details}>
        <div className={styles.weightRow}>
          <span className={styles.weight}>{relativeAtomicWeight}</span>
          <span className={styles.oxidationState}>{stableOxidationState}</span>
        </div>
        <div className={styles.names}>
          <p className={styles.mainName}>{mainName}</p>
          <p className={styles.secondaryName}>{secondaryName}</p>
        </div>
      </div>
    </div>
  )
}

export default Element
