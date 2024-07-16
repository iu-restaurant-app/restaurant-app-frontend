'use client';
import React from 'react';

interface FormItemProps {
  formTitle: string;
  initialTitle: string;
  initialDescription: string;
  initialPrice: number;
  initialCalories: number;
  initialImage: string;
}

export default function UpdatePage({
  formTitle,
  initialTitle = '',
  initialDescription = '',
  initialPrice,
  initialCalories,
  initialImage = '',
}: FormItemProps) {
  const [title, setTitle] = React.useState(initialTitle);
  const [description, setDescription] = React.useState(initialDescription);
  const [price, setPrice] = React.useState(initialPrice);
  const [calories, setCalories] = React.useState(initialCalories);
  const [image, setImage] = React.useState(initialImage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-default-50">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 className="text-2xl font-medium text-gray-900 dark:text-white">
            {formTitle}
          </h5>
          <>
            <label
              htmlFor="photo_input"
              className="block mb-4 text-base font-medium text-gray-900 "
            >
              Photo
            </label>
            <input
              src={image}
              onChange={e => setImage(e.target.value)}
              className="block w-full p-0.5 text-base text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 outline-0"
              aria-describedby="file_input_help"
              id="photo_input"
              type="file"
            ></input>
          </>
          <div>
            <label
              htmlFor="title"
              className="block mb-4 text-base font-medium text-gray-900 "
            >
              Title
            </label>
            <input
              type="text"
              id="default-title"
              value={title}
              onChange={e => setTitle(e.target.value)}
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
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-default-600 focus:border-default-600 outline-0"
              placeholder="Write description for meal here..."
              maxLength={100}
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="number-input"
              className="block mb-4 text-base font-medium text-gray-900"
            >
              Calories
            </label>
            <input
              type="text"
              id="number-input"
              value={calories}
              onChange={e => setCalories(Number(e.target.value))}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-600 focus:border-default-600 block w-full p-2.5 outline-0"
              placeholder="367"
              pattern="^[1-9]\d*$"
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
              type="text"
              id="number-input"
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-600 focus:border-default-600 block w-full p-2.5 outline-0"
              placeholder="24"
              pattern="^[1-9]\d*$"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-default-700 hover:bg-default-800 focus:ring-4 focus:outline-none focus:ring-default-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}
