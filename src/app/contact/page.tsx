import { MdSupportAgent } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import styles from "../styles/contact.module.css"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
 
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Contact(){
    return (
      <>
      <div className={styles.div1}>
      <h4 className={styles.h4}>Contact My Resturant</h4>
      <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta in, facilis magnam quos est eos ipsam ex obcaecati veritatis itaque illum vero molestiae hic aliquam a laboriosam quia! Fugit?</p></div>

<div className={styles.div2} >
  <Table >
  <TableHeader >
    <TableRow>
    <TableCell className={styles.contact}>Contact Details</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
      <MdSupportAgent className={styles.support}/>
      1234567890
      </TableCell>
      </TableRow>
    <TableRow>
      <TableCell>
       
        <MdEmail  className={styles.email} />
        helpline@.com
        </TableCell>
        </TableRow>
        <TableRow>
      <TableCell>
        
        <IoCall  className={styles.call}/>
        031-333-876
        </TableCell>
        </TableRow>
  </TableBody>
</Table>

</div>
      
      </>
    )
  }
  