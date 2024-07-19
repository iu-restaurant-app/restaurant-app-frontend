import React, { useState } from 'react';

export default function Select() {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent '-' key press
    if (event.key === '-') {
      event.preventDefault();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Continue to prevent negative numbers and non-numeric input
    if ((value as string).includes('-') || parseInt(value, 10) < 1) {
      setInputValue('');
    } else {
      setInputValue(value);
    }
  };

  return (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="number-input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Write your table number
      </label>
      <input
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-0"
        placeholder="120"
        required
        min="1"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}
