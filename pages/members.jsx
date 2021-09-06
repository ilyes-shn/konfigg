import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/members.module.css";
import MobileNav from "../components/MobileNav";
import { Button } from "@material-ui/core";
import Member from "../components/User";
import { useRouter } from "next/router";
import Image from "next/image";

const Pages = () => {
  const router = useRouter();

  return (
    <Layout>
      <MobileNav />
      <div className={styles.pages}>
        <h1>Members</h1>
        <h4 className={styles.description}>
          The default typography uses line-heights that align with our UI
          components. Margins are not included to allow for easier alignment
          with other UI elements.
        </h4>

        <div className={styles.table}>
          <div className={styles.header}>
            <div className={styles.left}>
              <h4
                style={{
                  borderBottom: "3px solid #FF77BB",
                  fontWeight: "bold !important",
                }}
              >
                All Pages <span>1337</span>
              </h4>
              <h4>
                Active <span>1337</span>
              </h4>
              <h4>
                Draft <span>1337</span>
              </h4>
              <h4>
                Deleted <span>1337</span>
              </h4>
            </div>
            <div className={styles.right}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "max-content" }}
                
              >
                Invite a new member
              </Button>
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuItem}>
              <input type="checkbox" />
              <div>
                <h3>Page Name</h3>
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className={styles.item}>
              <h3>Job</h3>
              <h4>All</h4>
            </div>
            <div className={styles.item}>
              <h3>Pages</h3>
              <h4>All</h4>
            </div>
            
            <div className={styles.item}>
              <h3>Last Update</h3>
              <h4>All</h4>
            </div>
            <div className={styles.item}>
              <h3>Action</h3>
            </div>
          </div>
          <div className={styles.items}>
            <Member
              bg="/images/member/image.svg"
              state="Marketing"
              type="22"
              lastUpdate="4 days ago"
              page="Louis Vuitton"
              color="#7FC008"
            />
            <Member
              bg="/images/member/image(1).svg"
              
              state="Marketing"
              type="13"
              
              lastUpdate="6 days ago"
              page={`Johnson & Johnson`}
              color="#DB303F"
            />
            <Member
              bg="/images/member/image(5).svg"
              
              state="Marketing"
              type="6"
              
              lastUpdate="6 days ago"
              page="Starbucks"
              color="#DB8C28"
            />
            <Member
              bg="/images/member/image(3).svg"
              
              state="Marketing"
              type="5"
              
              lastUpdate="6 days ago"
              page="The Walt Disney"
              color="#DB303F"
            />
            <Member
              bg="/images/member/image(4).svg"
              
              state="Marketing"
              type="2"
              
              lastUpdate="9 days ago"
              page="Mitsubishi"
              color="#DB8C28"
            />
            <Member
              bg="/images/member/image(5).svg"
  
              state="Marketing"
              type="1"
              
              lastUpdate="26 days ago"
              page="IBM"
              color="#DB303F"
            />
          </div>
        </div>
        <div className={styles.pagination}>
          <div className={styles.gauche}>
            <div className={styles.img}>
              <Image
                height="15"
                width="15"
                src="/images/gauche.svg"
                alt="gauche"
              />
            </div>
            <span>1</span>
            <h4>/</h4>
            <h4>16</h4>
            <div className={styles.img}>
              <Image
                height="15"
                width="15"
                src="/images/droite.svg"
                alt="gauche"
              />
            </div>
          </div>
          <div className={styles.droite}>
            <h4>Rows per page</h4>
            <span>15</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pages;
