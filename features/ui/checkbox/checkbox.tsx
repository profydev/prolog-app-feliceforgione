import classNames from "classnames";
import styles from "./checkbox.module.scss";
import { useRef, useEffect } from "react";

export enum CheckboxSize {
  Small = "small",
  Medium = "medium",
}

export enum CheckboxState {
  Unchecked = "unchecked",
  Checked = "checked",
  Indeterminate = "indeterminate",
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  indeterminate?: boolean;
  checkboxSize?: CheckboxSize;
}

export function Checkbox({
  label,
  checkboxSize = CheckboxSize.Medium,
  ...otherProps
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkboxRef.current!.indeterminate = !!otherProps.indeterminate;
  }, []);

  return (
    <label className={classNames(styles.container)}>
      <input
        type="checkbox"
        className={styles[checkboxSize]}
        ref={checkboxRef}
        {...otherProps}
      />
      <span className={classNames(styles.label, styles[checkboxSize])}>
        {label}
      </span>
    </label>
  );
}
