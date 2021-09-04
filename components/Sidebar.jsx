import React from "react";
import styles from "../styles/sidebar.module.css";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.project}>
        <div className={styles.img}></div>
        <h2>Project Name</h2>
      </div>
      <a href="/pages">
        <div className={styles.active}>
          <Image height="16" width="16" src="/images/pages.svg" alt="pages" />
          <h3>Pages</h3>
          <h5>23</h5>
        </div>
      </a>
      <div className={styles.link}>
        <Image height="16" width="16" src="/images/docs.svg" alt="docs" />
        <h3>Documentation</h3>
      </div>
      <a href="/members">
        <div className={styles.link}>
          <Image height="16" width="16" src="/images/users.svg" alt="members" />
          <h3>Members</h3>
        </div>
      </a>
      <a href="/settings">
        <div className={styles.link}>
          <Image
            height="16"
            width="16"
            src="/images/settings.svg"
            alt="settings"
          />
          <h3>Settings</h3>
        </div>
      </a>
    </div>
  );
};

export default Sidebar;
