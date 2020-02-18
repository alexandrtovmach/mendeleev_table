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

const generateBg = color => {
  if (typeof color === "string") {
    return color
  } else {
    return `linear-gradient(30deg, ${color[1]} 0, ${color[1]} 50%, ${color[0]} 50%)`
  }
}

const Legend = ({ children, colorList }) => {
  const colors = generateColors(colorList)
  return (
    <div className={styles.legendContainer}>
      <div className={styles.cellDescription}>
        <div className={styles.annotations}>
          <div className={styles.leftSide}>
            <div
              className={styles.annotation}
              style={{
                top: "10%",
              }}
            >
              <span>Symbol</span>
              <div className={styles.line}></div>
            </div>
            <div
              className={styles.annotation}
              style={{
                top: "25%",
              }}
            >
              <span>Realtive atomic weight</span>
              <div
                className={styles.line}
                style={{
                  height: "0.7rem",
                }}
              ></div>
            </div>
            <div
              className={styles.annotation}
              style={{
                top: "60%",
              }}
            >
              <span>Russian</span>
              <div
                className={styles.line}
                style={{
                  height: "0.2rem",
                }}
              ></div>
            </div>
            <div
              className={styles.annotation}
              style={{
                top: "70%",
              }}
            >
              <span>English</span>
              <div
                className={styles.line}
                style={{
                  height: "0.7rem",
                }}
              ></div>
            </div>
            <div
              className={styles.annotation}
              style={{
                top: "85%",
              }}
            >
              <span>Semimetal</span>
              <div
                className={styles.line}
                style={{
                  height: "0.2rem",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div
              className={styles.annotation}
              style={{
                top: "10%",
              }}
            >
              <span>Number</span>
              <div className={styles.line}></div>
            </div>
            <div
              className={styles.annotation}
              style={{
                top: "25%",
              }}
            >
              <span>Stable oxidation state</span>
              <div
                className={styles.line}
                style={{
                  height: "0.7rem",
                }}
              ></div>
            </div>
            <div
              className={styles.annotation}
              style={{
                top: "65%",
              }}
            >
              <span>Atomic radius</span>
              <div
                className={styles.line}
                style={{
                  height: "0.9rem",
                }}
              ></div>
            </div>
            <div
              className={styles.annotation}
              style={{
                top: "85%",
              }}
            >
              <span>Radioactive</span>
              <div
                className={styles.line}
              ></div>
            </div>
          </div>
        </div>
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
