import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptygray = "emptyGray",
  error = "error",
  emptyerror = "emptyError",
}

export enum IconPosition {
  leading = "leading",
  trailing = "trailing",
  only = "only",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
}

/* function classNamePropPrefix<K extends keyof ButtonProps>(
  propName: K,
  value: ButtonProps[K],
) {
  return `${propName}-${value}`;
} */

export function Button({
  className,
  size = ButtonSize.md,
  color = ButtonColor.primary,
  disabled = false,
  children,
  icon,
  iconPosition = IconPosition.leading,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      {...otherProps}
      className={classNames(
        styles.button,
        styles[size],
        styles[color],

        className,
      )}
    >
      {icon}
      <span
        className={classNames(styles.content, icon && styles[iconPosition])}
      >
        {children}
      </span>
    </button>
  );
}
