import React, { useState } from "react";
import styles from "../styles/invoice.module.css";
import Image from "next/image";
import { Button } from "@material-ui/core";

const Member = ({ color, state, lastUpdate, page, type }) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.member}>
      <div className={styles.user}>
        <input type="checkbox" />
        <h4>{page}</h4>
      </div>
      <div className={styles.state}>
        <h4 style={{ borderColor: color, color: color }}>{state}</h4>
      </div>
      <div className={styles.type}>
        <h4>{type}</h4>
      </div>
      
      <div className={styles.update}>
        <h4>{lastUpdate}</h4>
      </div>
      <div className={styles.action} onClick={() => setShow(!show)}>
        <Image
          height="24"
          width="24"
          src="/images/member/points.svg"
          alt="points"
        />
      </div>
      {show && (
        <div className={styles.options}>
          <h3>Actions</h3>
          <h4>Live View</h4>
          <h4>Edit</h4>
          <h4 onClick={() => setModal(true)}>Delete</h4>
        </div>
      )}
      {
          modal && (
<div className={styles.modal}>
        <div className={styles.box}>
          <div className={styles.btn} onClick={() => setModal(false)}>
            <Image
              height="20"
              width="20"
              src="/images/close1.svg"
              alt="close"
            />
          </div>
          <Image height='42' width='42' src={bg} alt='page icon'/>
          <h4>Louis Vuitton</h4>
          <h4>lvuitton@gmail.com</h4>
          <div className={styles.stat}>
        <h4 style={{ borderColor: color, color: color }}>{state}</h4>
      </div>
      
        <h4>{type}</h4>
   
        <h4>{lastUpdate}</h4>
     
          <Button
            variant="contained"
            color="primary"
            style={{ width: "max-content", marginTop: '10px' }}
            onClick={() => setModal(false)}
          >
            Delete
          </Button>
        </div>
      </div>
          )
      }
      
    </div>
  );
};

export default Member;
