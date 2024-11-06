

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.div1}>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <h2 className={styles.h2}>About Us</h2>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            atque repudiandae consectetur quibusdam eius dignissimos recusandae,
            tenetur maiores quos veniam deleniti esse.
          </p>
        </div>

        <div className={styles.div3}>
          <h2 className={styles.h2}>The Restaurant</h2>

          <ul className={styles.ul}>
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className={styles.icon}>
            <FaFacebookF />
            <BsTwitter />
            <BsPinterest />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        &copy; Copyright 2023 All rights reserved
      </div>
    </div>
  );
};

export default Footer;