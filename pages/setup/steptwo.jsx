import React from "react";
import styles from "../../styles/login/steptwo.module.css";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  return (
    <div className={styles.login}>
      <div className={styles.left}>
        <div className={styles.header}>
          <div>
            <Image
              height="27"
              width="27"
              src="/images/4535.svg"
              alt="Konfigg logo"
            />
            <h2>Konfigg</h2>
          </div>
        </div>
        <h1>Setup your account</h1>
        <h4>Connect your Storybook</h4>
        <div
          style={{
            display: "flex",
            paddingBottom: "10px",
            alignItems: "center",
            borderBottom: "1px solid #DBDBDB",
          }}
        >
          <h3 onClick={() => router.push("/setup/stepone")}>Step 1</h3>
          <div className={styles.img}>
            <Image height="10" width="10" src="/images/icon.svg" alt="arrow" />
          </div>
          <h3 style={{ color: "#404040", textDecoration: "underline" }}>
            Step 2
          </h3>
          <div className={styles.img}>
            <Image height="10" width="10" src="/images/icon.svg" alt="arrow" />
          </div>
        </div>
        <div className={styles.form}>
          <h3>Quick Start - Install the package inside your application:</h3>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="npm install @componly/konfigg-design-system"
            />
          </div>
          <h1>How to use</h1>
          <h4 style={{ fontWeight: "lighter" }}>
            The documentation is available at{" "}
            <span style={{ color: "#1F75CB" }}>
              www.konfigg.co/documentaion
            </span>
          </h4>
          <span style={{ color: "#1F75CB", fontSize: '14px' }}>
              React
            </span>
            <span style={{ color: "#1F75CB", fontSize: '14px' }}>
              Vue.js
            </span>
            <span style={{ color: "#1F75CB", fontSize: '14px' }}>
              Angular
            </span>
            <h1>Repository</h1>
            <span style={{ color: "#1F75CB", fontSize: '14px' }}>
              www.github.com/konfigg
            </span>
            <div style={{display: 'flex'}}>
            <Button
            onClick={() => router.push("/setup/stepone")}
            variant="outlined"
            color="primary"
            style={{ width: "max-content", marginTop: '20px' }}
          >
            Previous step
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "max-content", marginTop: '20px', marginLeft: '20px' }}
          >
            Verify
          </Button>
          </div>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Login;
