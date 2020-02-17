import React from "react"
import classNames from "classnames"

import styles from "./legend.module.scss"

const Legend = ({ children }) => {
  return (
    <div className={styles.legendContainer}>
      <div className={styles.cellDescription}>
        <div className={styles.legendElementScale}>{children}</div>
      </div>
      <div className={styles.typesList}>
        {["s", "p", "d", "f"].map(type => (
          <>
            <span>{type}</span>
            <span> - elements</span>
          </>
        ))}
      </div>
    </div>
  )
}

export default Legend
