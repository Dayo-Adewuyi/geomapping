import styles from "./layout.module.scss";
import type { Metadata } from "next";
import HomePageContext from "./context/HomePageContext";

export const metadata: Metadata = {
  title: "Wande Maps",
  description: "Map view",
};

export default function PublicPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HomePageContext>
        <body className={styles.PublicPageLayout}>
          <div className={styles.children_container}>{children}</div>
        </body>
      </HomePageContext>
    </html>
  );
}
