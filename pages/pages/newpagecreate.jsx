import React, { useState } from "react";
import styles from "../../styles/pages/create.module.css";
import Image from "next/image";
import {useRouter} from 'next/router'


const NewPage = () => {
  const [active, setActive] = useState(true)
  const router = useRouter()

  return (
    <div className={styles.newpage}>
      <div className={styles.left}>
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <h2>Untitled</h2>
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
        <div className={styles.form}>
        <h3>Title</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Input" />
          </div>
          <h3>Publish Date</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Input" placeholder='YYYY-MM-DD'/>
          </div>
          <h3>Intro</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Input" />
          </div>
        </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.platform}>
          <div className={styles.switch}>
          <h4 onClick={() => setActive(true)} style={{color: active ? '#303030' : '#666666', borderBottom: active ? '1px solid #FF77BB' : '1px solid #BFBFBF'}}>Desktop</h4>
          <h4 onClick={() => setActive(false)} style={{color: active ? '#666666' : '#303030', borderBottom: !active ? '1px solid #FF77BB' : '1px solid #BFBFBF'}}>Mobile</h4>
          </div>
          <h4 className={styles.preview}>Preview</h4>
          <Image height='14' width='14' src='/images/globe.svg' alt='globe'/>
        </div>
        <div className={styles.page}></div>
      </div>
    </div>
  );
};

export default NewPage;
