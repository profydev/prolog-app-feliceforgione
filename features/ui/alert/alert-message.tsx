import classNames from "classnames";
import styles from "./alert.module.scss";
interface AlertMessageProps {
  children: React.ReactNode;
  className?: string;
}

export function AlertMessage({ children, className }: AlertMessageProps) {
  return (
    <span className={classNames(styles.message, className)}>{children}</span>
  );
}
