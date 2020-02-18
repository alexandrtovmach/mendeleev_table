import React from "react"
import classNames from "classnames"

import { Element, Legend } from "../"
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

class Table extends React.Component {
  state = {
    selectedElementIdx: 32,
  }

  nodeToElementComponent = (
    {
      node: {
        id,
        periodicalNumber,
        symbol,
        relativeAtomicWeight,
        stableOxidationState,
        rusName,
        engName,
        color,
        hexColor,
        group,
        period,
        atomicRadius,
        radioactivity,
      },
    },
    idx
  ) => {
    const isSemimetal = isSemimetalCheck(periodicalNumber)
    const isRadioactive = Boolean(Number(radioactivity))
    const isInversedColor = Number(color) === 2
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
    });

		const isCustomElement = idx === undefined;
    return (
      <Element
        key={id}
        onClick={!isCustomElement && this.handleSelectElement(idx)}
        periodicalNumber={periodicalNumber}
        xPos={xPos}
        yPos={yPos}
        symbol={symbol}
        mainName={rusName}
        secondaryName={engName}
        relativeAtomicWeight={weight}
        stableOxidationState={oxidState}
        hexColor={hexColor}
        atomicRadius={atomicRadius}
        isSemimetal={isSemimetal}
        isLantanoid={isLantanoid}
        isActinoid={isActinoid}
        isInversedColor={isInversedColor}
        isRadioactive={isRadioactive}
        isCustomElement={isCustomElement}
      />
    )
  }

  handleSelectElement = idx => () => {
    idx !== undefined &&
      this.setState({
        selectedElementIdx: idx,
      })
  }

  render() {
    const { elements, sortColors } = this.props
    const { selectedElementIdx } = this.state

    return (
      <div className={styles.tableContainer}>
        <Legend colorList={sortColors}>
          {this.nodeToElementComponent(elements[selectedElementIdx])}
        </Legend>
        {elements.map(this.nodeToElementComponent)}
        <div
          className={classNames(styles.line, styles.light)}
          style={{
            gridRow: 6,
          }}
        ></div>
        <div
          className={classNames(styles.line, styles.dark)}
          style={{
            gridRow: 7,
          }}
        ></div>
        <div
          className={classNames(styles.line, styles.dashed)}
          style={{
            gridRow: 8,
          }}
        ></div>
        <div
          className={classNames(styles.line, styles.light)}
          style={{
            gridRow: 9,
          }}
        ></div>
        <div
          className={classNames(styles.line, styles.dark)}
          style={{
            gridRow: 10,
          }}
        ></div>
      </div>
    )
  }
}

export default Table
