import Link from "next/link";
import React from "react";
import Head from "next/head";
import styles from "@/styles/MainLayout.module.scss";

export function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <nav className={styles.navbar}>
        <Link className={styles.link} href={"/"}>
          Главная
        </Link>
        <Link className={styles.link} href={"/products?p=1"}>
          Товары
        </Link>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
