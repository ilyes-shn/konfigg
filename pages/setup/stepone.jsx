import React from "react";
import styles from "../../styles/login/stepone.module.css";
import Image from "next/image";
import { Button } from "@material-ui/core";
import {useRouter} from 'next/router'

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
        </div>
          <h1>Setup your account</h1>
          <h4>
            Connect your Storybook
          </h4>
          <div style={{display: 'flex',paddingBottom: '10px' , alignItems: 'center', borderBottom: '1px solid #DBDBDB'}}>
            <h3 style={{color: '#404040', textDecoration: 'underline'}}>Step 1</h3>
            <div className={styles.img}>
            <Image height='10' width='10' src='/images/icon.svg' alt='arrow'/>
            </div>
            <h3 onClick={() => router.push('/setup/steptwo')}>Step 2</h3>
            <div className={styles.img}>
            <Image height='10' width='10' src='/images/icon.svg' alt='arrow'/>
            </div>
          </div>
        <div className={styles.form}>
          <h3>Full name</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your name" />
          </div>
          <h3>Email</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your email" />
          </div>
          <h3>Password</h3>
          <div className={styles.input}>
            <input type="password" placeholder="Enter your password" />
          </div>
          <h3>Confirm your password</h3>
          <div className={styles.input}>
            <input type="password" placeholder="Enter your password again" />
          </div>
          <h3>Project Name</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your project name" />
          </div>
          <h3>Your website</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your website" />
          </div>
          <h3>Created</h3>
          <div className={styles.input}>
            <input type="text" defaultValue='Aug 20, 2021' disabled/>
          </div>
          <Button
          onClick={() => router.push("/setup/steptwo")}
            variant="contained"
            color="primary"
            style={{ width: "max-content", marginTop: '20px' }}
          >
            Next step
          </Button>
          
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Login;
