"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import { routePaths } from "@/utils";

export default function SplashPage() {
  return (
    <main className={styles.main}>
      <p>Welcome to Sendstack Maps</p>
      <Link href={routePaths.HOMEPAGE} className={styles.view_button}>
        View Map
      </Link>
    </main>
  );
}
