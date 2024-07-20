import React, { useState } from 'react';

interface MenuSearchProps {
  onSearchChange: (searchText: string) => void;
}

const MenuSearch: React.FC<MenuSearchProps> = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);
    onSearchChange(text);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row mx-[100px] justify-between items-center my-6">
      <div className="flex-col items-start m-4 md:w-1/2">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-center md:text-left">
          Menu
        </h1>
        <p className="text-gray-600 text-md md:text-xl text-center md:text-left">
          Bright as the sun in Italy ☀️
        </p>
      </div>
      <div className="md:w-1/2 max-w-[300px]">
        <form className="mx-auto" onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-4 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-default-600 focus:border-default-600 outline-0"
              placeholder="Find meals"
              required
              value={searchText}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-default-600 hover:bg-default-800 focus:ring-4 focus:outline-none focus:ring-default-300 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-300 ease-in-out"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuSearch;
