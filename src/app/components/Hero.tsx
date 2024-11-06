import Image from "next/image";
import React from "react";
import styles from "../styles/hero.module.css"

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src="/hero2.png"
        width={1000}
        height={400}
        alt="hero_bg"
      />
     <div className={styles.div1}>
        <div className={styles.div2}>
          <p className={styles.p}>Wide options of choice</p>
          <h2 className={styles.h2}>
            Delicious <span className={styles.span}>Food</span>
          </h2>
          <p className={styles.p2}>
            Delicious food color, aroma and taste.
            <br /> What are you waiting for?
          </p>

          <button className={styles.btn}>
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;