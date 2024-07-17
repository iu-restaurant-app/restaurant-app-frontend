import React, { ReactNode } from 'react';

interface InputFieldProps {
  children: ReactNode;
}

export default function InputField(props: InputFieldProps) {
  return (
    <div className="m-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {props.children}
      </label>
      <input
        type="text"
        id="large-input"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg text-base outline-0"
      />
    </div>
  );
}
