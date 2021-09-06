import React from "react";
import styles from "../styles/login/login.module.css";
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
          <h4 style={{cursor: 'pointer'}} onClick={() => router.push('/register')}>Sign Up</h4>
        </div>
        <div className={styles.form}>
          <h1>Login to your account</h1>
          <h4>
            Access to the most powerful component visualizer tool for Design
            Systems.
          </h4>
          <div className={styles.inputs}>
            <h4>Login with</h4>
            <Image
              height="23"
              width="70"
              src="/images/google.svg"
              alt="Google"
            />
          </div>
          <div className={styles.inputs}>Login with SSO</div>
          <h3>Email</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your email" />
          </div>
          <h3>Password</h3>
          <div className={styles.input}>
            <input type="password" placeholder="Password" />
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "max-content" }}
            onClick={() => router.push('/pages')}
          >
            Login
          </Button>
          <h5>Forgot your password?</h5>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Login;
