import React from "react";
import styles from "../../styles/pages/newpage.module.css";
import Image from "next/image";
import SearchIcon from "@material-ui/icons/Search";
import {useRouter} from 'next/router'

const NewPage = () => {
  const router = useRouter()
  return (
    <div className={styles.newpage}>
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image height="27" width="27" src="/images/4535.svg" alt="logo" />
            <h2 onClick={() => router.push('/pages')}>Konfigg</h2>
          </div>
          <div className={styles.close} onClick={() => router.push('/pages')}>
            <Image
              height="20"
              width="20"
              src="/images/close1.svg"
              alt="close"
            />
          </div>
        </div>
        <div className={styles.path}>
            <Image height='17' width='17' src='/images/avtrwt.svg' alt='avatar'/>
            <h4>Project Name</h4>
            <div className={styles.arrow}><Image height='8' width='8' src='/images/icon.svg' alt='arrow'/></div>
            <h3>Create a new page</h3>
        </div>
        <div className={styles.list}>
            <div className={styles.search}>
            <div className={styles.searchIcon}>
            <SearchIcon />
            </div>
            <input type="text" placeholder='Select a page'/>
            </div>
            <h3>Heading</h3>
            <div className={styles.item} onClick={() => router.push('/pages/newpagecreate')}>
                <Image height='32' width='32' src='/images/avtrblk.svg' alt='avatar'/>
                <div className={styles.description}>
                    <h4>Title</h4>
                    <h5>Description</h5>
                </div>
            </div>
            <div className={styles.item} onClick={() => router.push('/pages/newpagecreate')}>
                <Image height='32' width='32' src='/images/avtrblk.svg' alt='avatar'/>
                <div className={styles.description}>
                    <h4>Title</h4>
                    <h5>Description</h5>
                </div>
            </div>
            <div className={styles.item} onClick={() => router.push('/pages/newpagecreate')}>
                <Image height='32' width='32' src='/images/avtrblk.svg' alt='avatar'/>
                <div className={styles.description}>
                    <h4>Title</h4>
                    <h5>Description</h5>
                </div>
            </div>
            <div className={styles.item} onClick={() => router.push('/pages/newpagecreate')}>
                <Image height='32' width='32' src='/images/avtrblk.svg' alt='avatar'/>
                <div className={styles.description}>
                    <h4>Title</h4>
                    <h5>Description</h5>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default NewPage;
