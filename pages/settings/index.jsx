import React from 'react'
import Layout from '../../components/Layout';
import MobileNav from '../../components/MobileNav';
import styles from '../../styles/settings/settings.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';

const Settings = () => {
  const router = useRouter()

    return (
        <Layout>
            <MobileNav title='Settings'/>
            <div className={styles.settings}>
                <h1>Settings</h1>
                <h4 className={styles.description}>The default typography uses line-heights that align with our UI components. Margins are not included to allow for easier alignment with other UI elements.</h4>
           <div className={styles.switch}>
               <h4 style={{borderBottom: '3px solid #FF77BB', fontWeight: 'bold !important'}}>General</h4>
               <h4 onClick={() => router.push('/settings/belling')}>Billing</h4>
               <h4 onClick={() => router.push('/settings/meta')}>Default Meta</h4>
           </div>
           <div className={styles.info}>
               <h2>Project Informations</h2>
               <h4>General information about your project</h4>
           </div>
            <div className={styles.form}>
          <h3>Project name</h3>
          <div className={styles.input}>
            <input type="text" defaultValue="Dev On Demand" />
          </div>
          <h3>Owner</h3>
          <div className={styles.input}>
            <input disabled type="text" defaultValue="devondemand.co" />
          </div>
          <h3>API ID</h3>
          <div className={styles.input}>
            <input disabled type="text" defaultValue="d12a110d-f094-1288-a0c2-f420e11c3576" />
          </div>
          <h3>Created</h3>
          <div className={styles.input}>
            <input disabled type="text" defaultValue="Aug 20, 2021" />
          </div>
          <div className={styles.info}>
               <h2>Project Informations</h2>
               <h4>General information about your project</h4>
           </div>
          <h3>Main website</h3>
          <div className={styles.input}>
            <input type="text" defaultValue="devondemand.co" />
          </div>
          <h3>Url Type</h3>
          <select className={styles.input} style={{padding: '0px 10px'}}>
              <option>Select an option</option>
              <option>mywebsite.com/newpage</option>
              <option>mywebsite.com/new-page</option>
              <option>mywebsite.com/folder/newpage</option>
              <option>mywebsite.com/folder/new-page</option>
          </select>
          <h3>TTL</h3>
          <div className={styles.input}>
            <input type="text" defaultValue="3600 seconds" />
          </div>
            </div>
            <div style={{cursor: 'pointer'}}>
            <Image height='32' width='228' src='/images/netlify.svg' alt='netlify'/>
            </div>
            </div>
        </Layout>
    )
}

export default Settings
