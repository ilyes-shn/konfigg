import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/navigation.module.css";
import AddBoxIcon from "@material-ui/icons/AddBox";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import {useRouter} from 'next/router'


const Navigation = () => {
  const router = useRouter()
  const [show, setShow] = useState(false);
  return (
    <div className={styles.navigation}>
      <div className={styles.left}>
        <Image height="27" width="27" src="/images/4535.svg" alt="logo" />
        <h2 onClick={() => router.push('/pages')}>Konfigg</h2>
      </div>
      <div className={styles.right}>
        <div className={styles.add}>
          <AddBoxIcon fontSize="small" />
          <KeyboardArrowDownIcon fontSize="small" />
        </div>
        <div className={styles.input}>
          <SearchIcon />
          <input type="text" placeholder="Search or jump to..." />
        </div>
        <div className={styles.avatar} onClick={() => setShow(!show)}>
          <div className={styles.img}>
            <Image height="20" width="20" src="/images/avtr.svg" alt="avtr" />
          </div>
          <KeyboardArrowDownIcon fontSize="small" />
        </div>
        {show && (
          <div className={styles.popup}>
            <div className={styles.name}>
              <h3>Tina Smith</h3>
              <h5>@tsmithgit</h5>
            </div>
            <h4 onClick={() => router.push('/profile')}>Profile</h4>
            <h4 onClick={() => router.push('/')}>Sign out</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
