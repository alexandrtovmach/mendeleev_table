import React from "react"

import { Element } from "../"
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

const getAtomicRadiusAnnotationSytles = element => {
  const base = Number(element.atomicRadius) || 1.5
  return {
    height: `${Math.max(2.8 - base, 0.4)}rem`,
    transform: `translateY(50%) skew(-${45 - (2.9 - base) * 12}deg)`,
  }
}

const Legend = ({ colorList, element, onSelectSortOfElements }) => {
  console.log(element)
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
                  height: "0.5rem",
                }}
              ></div>
            </div>
            {element.isSemimetal && (
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
            )}
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
                style={getAtomicRadiusAnnotationSytles(element)}
              ></div>
            </div>
            {element.isRadioactive && (
              <div
                className={styles.annotation}
                style={{
                  top: "85%",
                }}
              >
                <span>Radioactive</span>
                <div className={styles.line}></div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.legendElementScale}>
          <Element {...element} isCustomElement />
        </div>
      </div>
      <div className={styles.sortList}>
        {["s", "p", "d", "f"].map(sortName => {
          const color = colors[sortName]
          return (
            <div className={styles.sortItem} onMouseOver={() => onSelectSortOfElements(color.sort)} onMouseLeave={() => onSelectSortOfElements(null)} >
              <div
                key={color.id}
                className={styles.sortColorBlock}
                style={{
                  background: generateBg(color.hexColor),
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
