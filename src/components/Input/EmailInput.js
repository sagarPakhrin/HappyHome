import { useField } from 'formik';
import React from 'react';

const EmailInput = ({ isValid = false, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col text-left">
      <div className="relative flex items-center">
        {label && (
          <label
            htmlFor={props.id || props.name}
            className={`text-sm transition-all transition-500 absolute text-coolGray-400 ${
              field.value ? '-top-3 ' : 'top-1 font-medium'
            }`}
          >
            {label}
          </label>
        )}
        <input
          {...field}
          {...props}
          className="w-full py-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
          type="email"
          autoComplete="off"
        />
        {isValid && (
          <span className="material-icons absolute right-0 text-teal-400 select-none">
            check_box
          </span>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default EmailInput;
