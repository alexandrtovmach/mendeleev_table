import React from "react"

import styles from "./element.module.scss"

const Element = ({ elData }) => {
  console.log(elData)
  return (
    <div className={styles.myClass}>
      {Object.keys(elData).map(key => (
        <p>
          {key}: {elData[key]}
        </p>
      ))}
    </div>
  )
}

export default Element
