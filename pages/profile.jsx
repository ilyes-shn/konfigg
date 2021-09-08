import React, { useEffect, useState } from "react";
import styles from "../styles/profile.module.css";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";
import MobileNav from "../components/MobileNavProfile";

const Login = () => {
  const router = useRouter();
  const [file, setFile] = useState(null)
  const [img, setImg] = useState('')
  const [crop, setCrop] = useState(false)

useEffect(() => {
  if (file !== null) {
    const url = URL.createObjectURL(file)
    setImg(url)
    setCrop(true)
  }
}, [file])

  return (
    <>
    <Navigation />
    <MobileNav />
    <div className={styles.login}>
      <div className={styles.left}>
        <h1>Profile</h1>
        <h4>
          The default typography uses line-heights that align with our UI
          components. Margins are not included to allow for easier alignment
          with other UI elements.
        </h4>
        <div className={styles.avatar}>
          <div className={styles.img}>
            <Image width="96" height="96" src={img || '/images/avatar.svg'} alt="avatar" />
          </div>
          <div className={styles.inputImg}>
            <input accept="image/*" id="file" type="file" name='file' onChange={e => setFile(e.target.files[0])}/>
            <label htmlFor="file">
              Choose file...
            </label>
            <h4>The maximum file size allowed is 200KB.</h4>
            <button>Remove photo</button>
          </div>
        </div>
        {
          crop && (
            <div className={styles.cropPage}>
              <div className={styles.box}>
                <div className={styles.cropHeader}>
                  <h3>Crop avatar</h3>
                  <div className={styles.close} onClick={() => setCrop(false)}>
                  <Image height='20' width='20' src='/images/close.svg' alt='close' />
                  </div>
                </div>
                <div className={styles.cropBody}>
                  <div className={styles.cropImg}>
                  <Image height='256' width='256' src={img || '/images/avatar.svg'} alt="avatar" />
                  </div>
                  <div className={styles.range}>
                  <Image height='10' width='10' src='/images/cropIcon.svg' alt='Icon' />
                  <input type="range" min="20" max="100" step="10" />
                  <Image height='20' width='20' src='/images/cropIcon.svg' alt='Icon' />
                  </div>
                </div>
                <div className={styles.btns}>
                  <button onClick={() => setCrop(false)}>Cancel</button>
                  <button onClick={() => setCrop(false)}>Save Avatar</button>
                </div>
              </div>
            </div>
          )
        }
        <h2>Personal details</h2>
        <h4>Your personal information</h4>
        <div className={styles.form}>
        <h3>Full name</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your name" />
          </div>
          <h3>Username</h3>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="@tsmithgit"
              disabled
            />
          </div>
          <h3>Email</h3>
          <div className={styles.input}>
            <input type="text" placeholder="tinasmith@gmail.com" />
          </div>
          
           <h3>Choose a new password</h3>
            <Button
              variant="contained"
              color="primary"
              style={{
                width: "max-content"}}
            >
              Magic Link to create a new password
            </Button>
          <h2 style={{marginTop: '30px'}}>Danger zone</h2>
          <h4>Irreversible and destructive actions</h4>
          <Button
              variant="contained"
              color="secondary"
              style={{
                width: "max-content"
             ,marginTop: '20px' }}
            >
              Delete user
            </Button>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
    </>
  );
};

export default Login;
