import React from "react";
import Layout from "../../components/Layout";
import MobileNav from "../../components/MobileNav";
import styles from "../../styles/settings/settings.module.css";
import { useRouter } from "next/router";

const Meta = () => {
  const router = useRouter();

  return (
    <Layout>
      <MobileNav title='Settings'/>
      <div className={styles.settings}>
        <h1>Settings</h1>
        <h4 className={styles.description}>
          The default typography uses line-heights that align with our UI
          components. Margins are not included to allow for easier alignment
          with other UI elements.
        </h4>
        <div className={styles.switch}>
          <h4 onClick={() => router.push("/settings")}>General</h4>
          <h4 onClick={() => router.push("/settings/belling")}>Billing</h4>
          <h4
            style={{
              borderBottom: "3px solid #FF77BB",
              fontWeight: "bold !important",
            }}
          >
            Default Meta
          </h4>
        </div>
        <div className={styles.info}>
          <h2>Default Meta</h2>
        </div>
        <div className={styles.information}>
          <div className={styles.info}>
            <h2>Billing information</h2>
          </div>
          <div className={styles.form}>
            <h3>Title by default of the page</h3>
            <div className={styles.input}>
              <input
                type="text"
                defaultValue="Dev On Demand  |  Front End dev"
              />
            </div>
            <h3>Description by default of the page</h3>
            <div className={styles.input}>
              <input
                type="text"
                defaultValue="On-demand Front end development"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Meta;
