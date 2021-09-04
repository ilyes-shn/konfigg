import React from 'react'
import Layout from '../../components/Layout';
import MobileNav from '../../components/MobileNav';
import styles from '../../styles/settings/settings.module.css'

const settings = () => {
    return (
        <Layout>
            <MobileNav />
            <div className={styles.settings}>
                <h1>Settings</h1>
                <h4 className={styles.description}>The default typography uses line-heights that align with our UI components. Margins are not included to allow for easier alignment with other UI elements.</h4>
           <div className={styles.switch}>
               <h4 style={{borderBottom: '3px solid #FF77BB', fontWeight: 'bold !important'}}>General</h4>
               <h4>Billing</h4>
               <h4>Default Meta</h4>
           </div>
           <div className={styles.info}>
               <h2>Project Informations</h2>
               <h4>General information about your project</h4>
           </div>
            <div className={styles.form}>

            </div>
            </div>
        </Layout>
    )
}

export default settings
