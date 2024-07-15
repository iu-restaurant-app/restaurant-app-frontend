import React from 'react';

export default function UpdatePage(title: string) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-default-50">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form className="space-y-6" action="#">
          <h5 className="text-2xl font-medium text-gray-900 dark:text-white">
            Update meal
          </h5>
          <>
            <label className="block mb-4 text-base font-medium text-gray-900 ">
              Photo
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG or JPG
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </>
          <div>
            <label className="block mb-4 text-base font-medium text-gray-900 ">
              Title
            </label>
            <input
              type="text"
              id="default-title"
              className="block w-full p-4 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-default-600 focus:border-default-600 outline-0"
              placeholder="Pizza Margarita"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-4 text-base font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-default-600 focus:border-default-600 outline-0"
              placeholder="Write description for meal here..."
            ></textarea>
          </div>
          <div>
            <label className="block mb-4 text-base font-medium text-gray-900 ">
              Calories
            </label>
            <input
              type="text"
              id="calories"
              className="block w-full p-4 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-default-600 focus:border-default-600 outline-0"
              placeholder="273 cal."
              required
            />
          </div>
          <div>
            <label
              htmlFor="number-input"
              className="block mb-4 text-base font-medium text-gray-900"
            >
              Price
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-600 focus:border-default-600 block w-full p-2.5 outline-0"
              placeholder="130"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-default-700 hover:bg-default-800 focus:ring-4 focus:outline-none focus:ring-default-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-default-600 dark:hover:bg-default-700 dark:focus:ring-default-800"
          >
            Save meal
          </button>
        </form>
      </div>
    </div>
  );
}
