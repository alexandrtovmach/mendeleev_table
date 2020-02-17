import React from "react"

import styles from "./legend.module.scss"

const generateColors = colorList => {
  return colorList.reduce(
    (prev, { nodes: [{ id, hexColor, color, sort }] }) => {
      return {
        ...prev,
        [sort]: {
          id,
          hexColor: prev[sort] ? [prev[sort].hexColor, hexColor] : hexColor,
          color,
          sort,
        },
      }
    },
    {}
  )
}

const generateBg = (color) => {
	if (typeof color === "string") {
		return color;
	} else {
		return `linear-gradient(30deg, ${color[1]} 0, ${color[1]} 50%, ${color[0]} 50%)`
	}
}

const Legend = ({ children, colorList }) => {
  const colors = generateColors(colorList)
  return (
    <div className={styles.legendContainer}>
      <div className={styles.cellDescription}>
        <div className={styles.legendElementScale}>{children}</div>
      </div>
      <div className={styles.sortList}>
        {["s", "p", "d", "f"].map(sortName => {
          const { id, hexColor } = colors[sortName]
          return (
            <div className={styles.sortItem}>
              <div
                key={id}
                className={styles.sortColorBlock}
                style={{
                  background: generateBg(hexColor),
                }}
              />
              <span className={styles.sortSign}>{sortName}</span>
              <span>-elements</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Legend
