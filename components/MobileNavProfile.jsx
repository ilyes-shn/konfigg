import React, { useState } from "react";
import styles from "../styles/mobilenav.module.css";
import Image from "next/image";
import AddBoxIcon from "@material-ui/icons/AddBox";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Link from "next/link";
import {useRouter} from 'next/router'

const MobileNav = () => {
  const router = useRouter()
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.mobile}>
      {!open && (
        <div className={styles.nav}>
          <div className={styles.open} onClick={() => setOpen(true)}>
            <Image width="20" height="20" src="/images/open.svg" alt="open" />
          </div>
          <h3>Profile</h3>
        </div>
      )}
      {open && (
        <div className={styles.sideBar}>
          <div className={styles.navigation}>
            <div className={styles.left}>
              <div className={styles.close} onClick={() => setOpen(false)}>
                <Image
                  height="27"
                  width="27"
                  src="/images/close.svg"
                  alt="close"
                />
              </div>
              <Image height="27" width="27" src="/images/4535.svg" alt="logo" />
              <h2>Konfigg</h2>
            </div>
            <div className={styles.right}>
              <div className={styles.add}>
                <AddBoxIcon fontSize="small" />
                <KeyboardArrowDownIcon fontSize="small" />
              </div>
              <div className={styles.avatar} onClick={() => setShow(!show)}>
                <div className={styles.img}>
                  <Image
                    height="20"
                    width="20"
                    src="/images/avtr.svg"
                    alt="avtr"
                  />
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
          <div className={styles.sidebar}>
            <div className={styles.project}>
              <div className={styles.imag}></div>
              <h2>Project Name</h2>
            </div>
            <Link href="/pages" passHref>
              <div className={styles.active}>
                <Image
                  height="16"
                  width="16"
                  src="/images/pages.svg"
                  alt="pages"
                />
                <h3>Pages</h3>
                <h5>23</h5>
              </div>
            </Link>
            <div className={styles.link}>
              <Image height="16" width="16" src="/images/docs.svg" alt="docs" />
              <h3>Documentation</h3>
            </div>
            <Link href="/members" passHref>
              <div className={styles.link}>
                <Image
                  height="16"
                  width="16"
                  src="/images/users.svg"
                  alt="members"
                />
                <h3>Members</h3>
              </div>
            </Link>
            <Link href="/settings" passHref>
              <div className={styles.link}>
                <Image
                  height="16"
                  width="16"
                  src="/images/settings.svg"
                  alt="settings"
                />
                <h3>Settings</h3>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
