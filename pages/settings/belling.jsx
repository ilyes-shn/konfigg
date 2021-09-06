import React, { useState } from "react";
import Layout from "../../components/Layout";
import MobileNav from "../../components/MobileNav";
import styles from "../../styles/settings/settings.module.css";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import Invoice from '../../components/Invoice'
import Cards from '../../components/Cards'

const Belling = () => {
  const router = useRouter();
  const [price, setPrice] = useState(false)

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
            onClick={() => setPrice(true)}
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
              state="Paid"
              type="Landing"
              lastUpdate="4 days ago"
              page="March 2021"
              color="#7FC008"
            />
             <Invoice
              state="Overdue"
              type="Landing"
              lastUpdate="4 days ago"
              page="March 2021"
              color="#DB303F"
            />
             <div className={styles.pagination}>
          <div className={styles.gauche}>
            <div className={styles.img}>
              <Image
                height="15"
                width="15"
                src="/images/gauche.svg"
                alt="gauche"
              />
            </div>
            <span>1</span>
            <h4>/</h4>
            <h4>16</h4>
            <div className={styles.img}>
              <Image
                height="15"
                width="15"
                src="/images/droite.svg"
                alt="gauche"
              />
            </div>
          </div>
          <div className={styles.droite}>
            <h4>Rows per page</h4>
            <span>15</span>
          </div>
        </div>
        </div>
        <div className={styles.info}>
          <h2>Billing details</h2>
          <h4>Payment and billing information for this team account</h4>
        </div>
        <div className={styles.information}>
          <div className={styles.info}>
            <h2>Payment information</h2>
          </div>
          <div className={styles.form}>
           <table style={{width: '100%', fontSize: '14px', marginBottom: '30px'}}>
             <tbody>
             <tr>
               <td><h3>Payment method</h3></td>
               <td>**** **** **** **45</td>
               <td><Image height='32' width='51' src='/images/master.svg' alt='card'/></td>
               <td><Image height='24' width='24' src='/images/member/points.svg' alt='dots'/></td>

             </tr>
             <tr>
               <td>Credit card</td>
             </tr>
             </tbody>
           </table>
           <Button
            variant="contained"
            color="primary"
            style={{ width: "max-content" }}
          >
            Add a payment method
          </Button>
          </div>
        </div>
        <div className={styles.information} style={{marginTop: '50px'}}>
          <div className={styles.info}>
            <h2>Billing information</h2>
          </div>
          <div className={styles.form}>
            <h3>Name</h3>
            <div className={styles.input}>
              <input
                type="text"
                defaultValue="Tina Smith"
              />
            </div>
            <h3>Email</h3>
            <div className={styles.input}>
              <input
                type="text"
                defaultValue="muchodinero@gmail.com"
              />
            </div>
            <h3>Adress</h3>
            <div className={styles.input}>
              <input
                type="text"
                defaultValue="5 avenue Ingres, 75016 Paris"
              />
            </div>
          </div>
        </div>
        {
          price && (
            <div className={styles.price}>
              <div className={styles.box}>
                <div className={styles.close} onClick={() => setPrice(false)}>
                  <Image height='26' width='26' src='/images/close1.svg' alt='close'/>
                </div>
                <h2>Konfigg Pricing</h2>
                <Cards />
              </div>
            </div>
          )
        }
      </div>
    </Layout>
  );
};

export default Belling;
