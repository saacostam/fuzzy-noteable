import { ReactElement } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { IError } from '../icon';

export interface InputFieldProps {
  label: string;
  icon: ReactElement;

  formRegistration: UseFormRegisterReturn;
  error: FieldError | undefined;

  type?: 'text' | 'password' | 'email';
}

export function InputField({
  label,
  icon,

  formRegistration,
  error,

  type,
}: InputFieldProps) {
  const errorMessage = error?.message;

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-bold">{label}</span>
      </label>
      <label
        className={
          'input input-bordered flex items-center gap-2 ' +
          (errorMessage ? 'input-error' : 'input-secondary')
        }
      >
        {icon ? icon : null}
        <input
          type={type || 'text'}
          className="grow"
          placeholder={label}
          {...formRegistration}
        />
      </label>
      {errorMessage ? (
        <div className="label">
          <span className="flex label-text-alt text-md font-bold text-error">
            <IError />
            <span className="ml-1">{errorMessage}</span>
          </span>
        </div>
      ) : null}
    </div>
  );
}
