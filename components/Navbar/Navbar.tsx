import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarker,
  FaShoppingCart,
  FaTruck,
  FaPhone,
  FaSignInAlt,
  FaSignOutAlt,
  FaCartArrowDown,
} from "react-icons/fa";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav_container}>
        <div className={styles.nav_logo_wrapper}>
          <h2 className={styles.nav_logo_header}>
            Offer Zone Top Deals & Discounts
          </h2>
          <FaShoppingCart />
        </div>
        <div className={styles.nav_item_container}>
          <div className={styles.nav_item_wrapper}>
            <FaMapMarker />
            <p>Select Location</p>
          </div>
          <div className={styles.nav_item_wrapper}>
            <FaTruck />
            <p>Track Order</p>
          </div>
          <div className={styles.nav_item_wrapper}>
            <FaPhone />
            <p>001 234 5678</p>
          </div>
          <div className={styles.nav_item_wrapper}>
            <FaSignInAlt />
            <p>Login</p>
          </div>
          <div className={styles.nav_item_wrapper}>
            <FaSignOutAlt />
            <p>Register</p>
          </div>
        </div>
      </nav>
      <div className={styles.nav1_container}>
        <Image src="/logo2.png" alt="Vercel Logo" width={90} height={87} />
        <Link href="/">
          <a>
            <h2>Electro Store</h2>
          </a>
        </Link>
        <div className={styles.nav1_search_wrapper}>
          <input
            placeholder="Search"
            className={styles.nav1_search_input}
            type="text"
          />
          <button className={styles.nav1_search_btn}>Search</button>
        </div>
        <div className={styles.nav1_cart_wrapper}>
          <FaCartArrowDown className={styles.nav1_cart_icon} />
        </div>
      </div>
      <div className={styles.nav2_container}>
        <div className={styles.nav2_dropdown_wrapper}>
          <p className={styles.nav2_dropdon_text}>All Categories</p>
          <IoIosArrowDown />
        </div>
        <div className={styles.nav2_links_wrapper}>
          <div className={styles.nav2_links}>
            <p className={(styles.nav_link_text, styles.active)}>Home</p>
          </div>
          <div className={styles.nav2_links}>
            <p className={styles.nav_link_text}>Electronics</p>
            <IoMdArrowDropdown />
          </div>
          <div className={styles.nav2_links}>
            <p className={styles.nav_link_tex}>Appliances</p>
            <IoMdArrowDropdown />
          </div>
          <div className={styles.nav2_links}>
            <p className={styles.nav_link_text}>About Us</p>
          </div>
          <div className={styles.nav2_links}>
            <p className={styles.nav_link_text}>New Arrivals</p>
          </div>
          <div className={styles.nav2_links}>
            <p className={styles.nav_link_text}>Pages</p>
            <IoMdArrowDropdown />
          </div>
          <div className={styles.nav2_links}>
            <p className={styles.nav_link_text}>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
