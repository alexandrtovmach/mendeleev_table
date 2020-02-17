import React from "react"

import { Element } from "../"
import styles from "./table.module.scss"

const Table = ({ elements }) => {
  return (
    <div className={styles.tableContainer}>
      {
        elements && elements.map(({ node }) => (
          <Element key={node.id} {...node} />
        ))
      }
    </div>
  )
}

export default Table
