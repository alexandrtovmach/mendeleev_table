import React from "react"

import { page1 } from "../../data/table.json"
import { Element } from "../"
import styles from "./table.module.scss"

const Table = () => {
  console.log(page1);
  return (
    <div className={styles.tableContainer}>
      {
        page1.map((elementData) => (
          <Element elData={elementData} />
        ))
      }
    </div>
  )
}

export default Table
