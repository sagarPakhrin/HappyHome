import { useField } from 'formik';
import React, { useState } from 'react';

const PasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [type, setType] = useState('password');
  return (
    <div className="flex flex-col text-left">
      <div className="relative">
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
          type={type}
        />
        {type === 'password' ? (
          <span
            className="material-icons absolute right-0 text-teal-400 select-none cursor-pointer"
            onClick={() => {
              setType('text');
            }}
          >
            visibility
          </span>
        ) : (
          <span
            className="material-icons absolute right-0 text-teal-400 select-none cursor-pointer"
            onClick={() => {
              setType('password');
            }}
          >
            visibility_off
          </span>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default PasswordInput;
