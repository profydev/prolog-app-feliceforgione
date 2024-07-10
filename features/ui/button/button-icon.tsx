import styles from "./button.module.scss";

interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
}

export function ButtonIcon({ src }: ButtonIconProps) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className={styles.icon} />
    </>
  );
}
