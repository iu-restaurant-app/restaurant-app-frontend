//taken: https://flowbite.com/docs/forms/search-input/#content
import React from 'react';

const MenuSearch = () => {
  return (
    <div className="flex flex-col md:flex-row m-[70px]">
      <div className="flex-col items-start p-8 md:w-1/2">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-left">Menu</h1>
        <p className="text-gray-600 text-md md:text-xl text-left">
          Bright as the sun in Italy ☀️
        </p>
      </div>
      <div className="p-8 md:w-1/2">
        <SearchComponent />
      </div>
    </div>
  );
};

const SearchComponent = () => {
  return (
    <div>
      <form className="mx-auto">
        <label
          htmlFor="default-search"
          className="mb-4 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-default-500 focus:border-default-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-default-500 dark:focus:border-default-500"
            placeholder="What do you want today?"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-default-600 hover:bg-default-800 focus:ring-4 focus:outline-none focus:ring-default-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-default-600 dark:hover:bg-default-700 dark:focus:ring-default-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuSearch;
