
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css" 






const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.div1}>
        <Image src="/logo (1).png" width={50} height={50} alt="logo" />
        <ul className={styles.ul}>
        <li>
             <Link href="/">Home</Link>
        </li>
         <li>
        <Link href="/about">About</Link>
        </li>
         <li>
          <Link href="/contact">Contact</Link>
          </li>
          <button className={styles.btn}>
            SignUp
          </button>
        </ul>
     
      </div>
    </nav>
  );
};

export default Navbar;