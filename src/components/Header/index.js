import { Link } from "gatsby"
import React from "react"

import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <>
    <header className={styles.header}>
      <Link to="/">ХИМИЯ ПРОСТО(лого)</Link>
      <nav className={styles.headedNav}>
				<Link to="/ru">RU</Link>
				<Link to="/en">EN</Link>
				<Link to="/uk">UK</Link>
      </nav>
    </header>
    <div className={styles.headerCompensator}></div>
  </>
)

export default Header
