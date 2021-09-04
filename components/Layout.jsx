import React from 'react'
import styles from '../styles/layout.module.css'
import Navigation from './Navigation'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
    return (
        <div>
            <Navigation />
            <div className={styles.layout}>
            <Sidebar />
            <div className={styles.page}>{children}</div>
            </div>
        </div>
    )
}

export default Layout
