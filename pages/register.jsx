import React from "react";
import styles from "../styles/login/register.module.css";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
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
          <h4 style={{cursor: 'pointer'}} onClick={() => router.push('/')}>Login</h4>
        </div>
        <div className={styles.form}>
          <h1>Create your account</h1>
          <h4>
            Access to the most powerful component visualizer tool for Design
            Systems.
          </h4>
          <div className={styles.inputs}>
            <h4>Register with</h4>
            <Image
              height="23"
              width="70"
              src="/images/google.svg"
              alt="Google"
            />
          </div>
          <h3>Email</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your email" />
          </div>
          
          <Button
            variant="contained"
            color="primary"
            style={{ width: "max-content" }}
            onClick={() => router.push('/setup/stepone')}
          >
            Create your account
          </Button>
          
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Login;
