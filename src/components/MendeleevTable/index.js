import React from "react"

import tableData from "../../data/table.json"
import { Element } from "../"
import styles from "./table.module.scss"

const Table = () => {
  return (
    <div className={styles.tableContainer}>
      {
        tableData.map((elementData) => (
          <Element elData={elementData} />
        ))
      }
    </div>
  )
}

export default Table
