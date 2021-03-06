import React from "react"
import classNames from "classnames"

import styles from "./element.module.scss"

const atomicRadiusToSize = atomicRadius => ({
  width: `${Math.round(atomicRadius * 8 || 10)}%`,
  height: `${Math.round(atomicRadius * 8 || 10)}%`,
})

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
  atomicRadius,
  isSemimetal,
  isRadioactive,
  isInversedColor,
  isCustomElement,
  isHiddenByFilter,
  onClick,
}) => {
  return (
    <div
      className={classNames(styles.elementContainer, {
        [styles.lanthanum]: !isCustomElement && Number(periodicalNumber) === 57,
        [styles.actinium]: !isCustomElement && Number(periodicalNumber) === 89,
				[styles.custom]: isCustomElement,
				[styles.muted]: !isCustomElement && isHiddenByFilter
      })}
      style={{
        backgroundColor: hexColor,
        gridColumn: xPos,
        gridRow: yPos,
      }}
      onClick={onClick}
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
      <div
        className={classNames(styles.atomicRadius, {
          [styles.inversedColor]: isInversedColor,
          [styles.radioactive]: isRadioactive,
        })}
        style={atomicRadiusToSize(atomicRadius)}
      ></div>
			{isSemimetal && <div className={styles.semimetal}></div>}
    </div>
  )
}

export default Element
