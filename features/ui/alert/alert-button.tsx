import { UnstyledButton } from "../button";
import styles from "./alert.module.scss";
import classNames from "classnames";

interface AlertButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AlertButton({
  children,
  className,
  onClick,
}: AlertButtonProps) {
  return (
    <UnstyledButton
      className={classNames(styles.alertButton, className)}
      onClick={onClick}
      type="button"
    >
      {children}
    </UnstyledButton>
  );
}
