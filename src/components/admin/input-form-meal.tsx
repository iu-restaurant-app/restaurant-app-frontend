'use client';
import React, { ChangeEvent, useState } from 'react';
import toBase64 from '@/utils/image-to-byte-array';

interface FormItemProps {
  formTitle: string;
  initialTitle: string;
  initialDescription: string;
  initialPrice: string;
  initialCalories: string;
  initialImage: string;
}

export default function UpdatePage(props: FormItemProps) {
  const [title, setTitle] = useState(props.initialTitle);
  const [description, setDescription] = useState(props.initialDescription);
  const [price, setPrice] = useState(props.initialPrice);
  const [calories, setCalories] = useState(props.initialCalories);
  const [base64, setBase64] = useState<string>(props.initialImage);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const base64String = await toBase64(file);
      setBase64(base64String as string);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-default-50">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 className="text-2xl font-medium text-gray-900 dark:text-white">
            {props.formTitle}
          </h5>
          <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {base64 && (
              <img
                className="p-5"
                src={base64}
                alt="Uploaded"
                style={{ maxWidth: '200px' }}
              />
            )}
          </div>
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
              placeholder="Write title here..."
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
              onChange={e => setCalories(e.target.value)}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-600 focus:border-default-600 block w-full p-2.5 outline-0"
              pattern="^[1-9]\d*$"
              placeholder="Write calories here..."
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
              onChange={e => setPrice(e.target.value)}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-600 focus:border-default-600 block w-full p-2.5 outline-0"
              pattern="^[1-9]\d*$"
              placeholder="Write price here..."
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
