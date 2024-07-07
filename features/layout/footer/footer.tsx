import Link from "next/link";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/#">Docs</Link>
            </li>
            <li>
              <Link href="/#">API</Link>
            </li>
            <li>
              <Link href="/#">Help</Link>
            </li>
            <li>
              <Link href="/#">Community</Link>
            </li>
          </ul>
          <div className={styles.footerLogo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/logo-small.svg" alt="logo" />
          </div>
          <div className={styles.footerVersion}>
            Version: {process.env.AppVersion}
          </div>
        </div>
      </div>
    </footer>
  );
}
