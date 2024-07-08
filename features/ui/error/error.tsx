import styles from "./error.module.scss";

interface ErrorProps {
  children: React.ReactNode;
  refetch: () => void;
}
export function Error({ children, refetch }: ErrorProps) {
  return (
    <div id="testerror" data-cy="error" className={styles.container}>
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/alert-circle.svg" alt="Error" className={styles.icon} />
      <div className={styles.messageContainer}>
        <span className={styles.message}>{children}</span>
        <button className={styles.button} onClick={refetch}>
          <span className={styles.buttonText}>Try again</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/arrow-right.svg"
            alt="Try again"
            className={styles.buttonIcon}
          />
        </button>
      </div>
    </div>
  );
}
