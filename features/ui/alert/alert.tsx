import styles from "./alert.module.scss";
import classNames from "classnames";

export function Alert({
  children,
  className,
  ...otherProps
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="alert"
      className={classNames(styles.alert, className)}
      {...otherProps}
    >
      {children}
    </div>
  );
}
