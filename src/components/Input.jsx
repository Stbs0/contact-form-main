import React from "react";
export function Input({ regestir, type, label }) {
  return (
    <div className=' flex flex-col grow'>
      <label
        className='text-sm text-left mb-2'
        htmlFor={label}>
        {label} <span>*</span>
      </label>
      <input
        name={label}
        className='border-2 outline-none  rounded-lg px-3 py-2 focus:border-green-600'
        type={type}
      />
    </div>
  );
}
