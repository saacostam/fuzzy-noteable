interface LoaderProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
}

export function Loader({ size }: LoaderProps) {
  return (
    <span className={`loading loading-dots loading-${size} text-accent`}></span>
  );
}
