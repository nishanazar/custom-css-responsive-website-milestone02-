import Image from "next/image";
import React from "react";
import Dash from "./Dash";
import styles from "../styles/featured.module.css"

const Featured = () => {
  return (
    <div className={styles.div}>
    
      <h3 className={styles.h3}>
      Our <br /> Featured <span className={styles.span}>Food</span>
      </h3>

      <p className={styles.p}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat
        repellat expedita tempore hic iste. Laborum odit illo ex nostrum! Lorem
        ipsum dolor sit amet.
      </p>

      <Dash />

      <div className={styles.div1}>
        <div className={styles.div2}>
          <Image
            className={styles.img}
            src="/grid__1.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div>
            <Dash />
            <h4 className={styles.h4}>Shrimp Salad</h4>
            <p className={styles.p2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>
        <div className={styles.grid2}>
          <Image
            className={styles.img}
            src="/grid__2.png"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className={styles.bake}>
            <Dash />
            <h2 className={styles.h4}>Baked apples</h2>
            <p className={styles.p2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>
        <div className={styles.div2}>
          <Image
            className={styles.img}
            src="/grid__3.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className={styles.div3}>
            <Dash />
            <h2 className={styles.h4}>Cherries chicken</h2>
            <p className={styles.p2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;