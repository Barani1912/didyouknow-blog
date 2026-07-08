interface DividerProps {
  className?: string;
}

export default function Divider({ className = "my-8" }: DividerProps) {
  return <hr className={`border-t border-theme-border w-full ${className}`} />;
}
