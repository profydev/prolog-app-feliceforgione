import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
import { UnstyledButton } from "./unstyled-button";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  Primary = "primary",
  Secondary = "secondary",
  Gray = "gray",
  Error = "error",
}

export enum ButtonVariant {
  Default = "default",
  Empty = "empty",
  IconOnly = "iconOnly",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
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
  color = ButtonColor.Primary,
  variant = ButtonVariant.Default,
  children,
  ...otherProps
}: ButtonProps) {
  return (
    <UnstyledButton
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[variant],
        className,
      )}
      {...otherProps}
    >
      {children}
    </UnstyledButton>
  );
}
