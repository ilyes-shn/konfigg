import React from "react";
import Layout from "../../components/Layout";
import MobileNav from "../../components/MobileNav";
import styles from "../../styles/settings/settings.module.css";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import Invoice from '../../components/Invoice'

const settings = () => {
  const router = useRouter();

  return (
    <Layout>
      <MobileNav />
      <div className={styles.settings}>
        <h1>Settings</h1>
        <h4 className={styles.description}>
          The default typography uses line-heights that align with our UI
          components. Margins are not included to allow for easier alignment
          with other UI elements.
        </h4>
        <div className={styles.switch}>
          <h4 onClick={() => router.push("/settings")}>General</h4>
          <h4
            style={{
              borderBottom: "3px solid #FF77BB",
              fontWeight: "bold !important",
            }}
          >
            Billing
          </h4>
          <h4 onClick={() => router.push("/settings/meta")}>Default Meta</h4>
        </div>
        <div className={styles.info}>
          <h2>Current Services</h2>
          <h4>Fees and metered feature usage for the current billing period</h4>
        </div>
        <div className={styles.information}>
          <div className={styles.info}>
            <h2>Billing information</h2>
          </div>
          <div className={styles.form}>
           <table style={{width: '100%', fontSize: '14px', marginBottom: '30px'}}>
             <tbody>
             <tr>
               <td><h3>Starter team plan</h3></td>
               <td>17/20 pages created</td>
               <td><h3>&#8364;350.00/ mo</h3></td>
             </tr>
             <tr>
               <td>Effective from Mar 7, 2018</td>
               <td>2/300 build minutes</td>
             </tr>
             </tbody>
           </table>
           <Button
            variant="contained"
            color="primary"
            style={{ width: "max-content" }}
          >
            Change Plan
          </Button>
          </div>
        </div>
        <div className={styles.info}>
          <h2>Invoices</h2>
          <h4>Itemized statements of service charges</h4>
        </div>
        <div>
        <div className={styles.menu}>
            <div className={styles.menuItem}>
              <input type="checkbox" />
              <div>
                <h3>Invoices</h3>
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className={styles.item}>
              <h3>State</h3>
              <h4>All</h4>
            </div>
            <div className={styles.item}>
              <h3>Type</h3>
              <h4>All</h4>
            </div>
            
            <div className={styles.item}>
              <h3>Last Update</h3>
              <h4>All</h4>
            </div>
            <div className={styles.item}>
              <h3>Action</h3>
            </div>
          </div>
        </div>
        <div className={styles.invoice}>
        <Invoice
              state="Marketing"
              type="22"
              lastUpdate="4 days ago"
              page="Louis Vuitton"
              color="#7FC008"
            />
        </div>
      </div>
    </Layout>
  );
};

export default settings;
