import { Grandstander } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { FaShoppingCart } from "react-icons/fa";

import Container from "../Container";

import styles from "./Nav.module.css";
const grandstander = Grandstander({ subsets: ['latin'] })
const Nav = ({ children }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });
  
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        
        <Image
                src="/images/Updog2.png"
                alt="Updog Logo"
                className={styles.logo}
                width={500}
                height={600}
                priority
              />
        
        <p className={styles.description}>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <FaShoppingCart />
            <strong className="sr-only">Cart</strong>
            <span className="snipcart-total-price">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "CAD",
              }).format(total)}
            </span>
          </a>
        </p>
      </Container>
    </nav>
  );
};

export default Nav;