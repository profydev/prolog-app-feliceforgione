import { Button, ButtonColor, ButtonSize, ButtonVariant } from "../button";

interface AlertButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AlertButton({ children, onClick }: AlertButtonProps) {
  return (
    <Button
      color={ButtonColor.Error}
      size={ButtonSize.sm}
      variant={ButtonVariant.Empty}
      onClick={onClick}
      type="button"
    >
      {children}
    </Button>
  );
}
