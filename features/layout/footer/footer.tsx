import Link from "next/link";
import styles from "./footer.module.scss";
import { version } from "../../../package.json";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.footerLinks}>
            <Link href="/#">Docs</Link>
            <Link href="/#">API</Link>
            <Link href="/#">Help</Link>
            <Link href="/#">Community</Link>
          </div>
          <div className={styles.footerLogo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/logo-small.svg" alt="logo" />
          </div>
          <div className={styles.footerVersion}>Version: {version}</div>
        </div>
      </div>
    </footer>
  );
}
