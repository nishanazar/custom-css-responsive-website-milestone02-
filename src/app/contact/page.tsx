import { MdSupportAgent } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import styles from "../styles/contact.module.css"



export default function Contact(){
    return (
      <div>
      <div className={styles.div1}>
      <h4 className={styles.h4}>Contact My Resturant</h4>
      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta in, facilis magnam quos est eos ipsam ex obcaecati veritatis itaque illum vero molestiae hic aliquam a laboriosam quia! Fugit?</p></div>

<div className={styles.div2} >
  
    <div className={styles.contact}>Contact Details</div>

      <div className={styles.support}>
      <MdSupportAgent style={{fontSize: '30px', color:'red'}} />
      1234567890M</div>
      
       <div className={styles.email}>
        <MdEmail  style={{fontSize: '30px', color:'blue'}}  />
        helpline@.com
        </div>
       
        <div className={styles.call}>
        <IoCall style={{fontSize: '30px', color:'green'}} />
        031-333-876
        </div>
      
      
        </div>
        </div>
    )
  }
  