interface AlertIconProps {
  src: string;
  className?: string;
}
export function AlertIcon({ src, className }: AlertIconProps) {
  return (
    <>
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className={className} />
    </>
  );
}
