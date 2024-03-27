import { ReactNode } from 'react';

interface AlertProps {
  type: 'error' | 'success';
  message: ReactNode;
}

export function Alert({ type, message }: AlertProps) {
  const typeBasedClasses = type === 'error' ? 'alert-error' : 'alert-success';

  return (
    <div
      role="alert"
      className={
        'alert text-sm flex justify-center py-2 mb-1 ' + typeBasedClasses
      }
    >
      <span className="text-center">{message}</span>
    </div>
  );
}
