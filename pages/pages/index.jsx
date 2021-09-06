import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/pages/pages.module.css";
import MobileNav from "../../components/MobileNav";
import { Button } from "@material-ui/core";
import Member from "../../components/Member";
import { useRouter } from "next/router";
import Image from "next/image";

const Pages = () => {
  const router = useRouter();

  return (
    <Layout>
      <MobileNav title='Pages'/>
      <div className={styles.pages}>
        <h1>Pages (23)</h1>
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
                onClick={() => router.push("/pages/newpage")}
              >
                Create a new page
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
              <h3>State</h3>
              <h4>All</h4>
            </div>
            <div className={styles.item}>
              <h3>Type</h3>
              <h4>All</h4>
            </div>
            <div className={styles.item}>
              <h3>Author</h3>
              <input type="text" placeholder="Search" />
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
              avatar="/images/member/image(6).svg"
              state="Active"
              type="landing"
              user="Evan Flores"
              lastUpdate="4 days ago"
              page="Louis Vuitton"
              color="#7FC008"
            />
            <Member
              bg="/images/member/image(1).svg"
              avatar="/images/member/image(7).svg"
              state="Deleted"
              type="Awareness"
              user="Arlene Wilson"
              lastUpdate="6 days ago"
              page={`Johnson & Johnson`}
              color="#DB303F"
            />
            <Member
              bg="/images/member/image(5).svg"
              avatar="/images/member/image(8).svg"
              state="Draft"
              type="Lead coll."
              user="Jennie Cooper"
              lastUpdate="6 days ago"
              page="Starbucks"
              color="#DB8C28"
            />
            <Member
              bg="/images/member/image(3).svg"
              avatar="/images/member/image(9).svg"
              state="Deleted"
              type="Alfa"
              user="Philip Steward"
              lastUpdate="6 days ago"
              page="The Walt Disney"
              color="#DB303F"
            />
            <Member
              bg="/images/member/image(4).svg"
              avatar="/images/member/image(10).svg"
              state="Draft"
              type="Bravo"
              user="Jorge Black"
              lastUpdate="9 days ago"
              page="Mitsubishi"
              color="#DB8C28"
            />
            <Member
              bg="/images/member/image(5).svg"
              avatar="/images/member/image(11).svg"
              state="Deleted"
              type="Gold"
              user="Gladys Jones"
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
