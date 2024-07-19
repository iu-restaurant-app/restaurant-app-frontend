'use client';
import React, { ChangeEvent, useState } from 'react';
import MealService from '@/api/meal/service/meal-service';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function CreateForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [calories, setCalories] = useState('');
  const [imageName, setImageName] = useState('');
  const [base64, setBase64] = useState<string>('');
  const router = useRouter();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toBase64(file);
    }
  };

  const toBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setBase64(reader.result as string);
    reader.onerror = error =>
      console.error('Error converting file to base64:', error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      title === '' ||
      price === '' ||
      calories === '' ||
      imageName === '' ||
      base64 === ''
    ) {
      toast.error("All fields except 'Description' are required.");
      return;
    }

    MealService.create({
      title: title,
      description: description,
      price: Number(price),
      calories: Number(calories),
      image: base64.slice(22),
      imageName: imageName,
    })
      .then(() => {
        router.push('/admin');
        toast.success('Meal created successfully!');
      })
      .catch(error => {
        toast.error('Failed to create meal.');
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-default-50">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form className="space-y-6">
          <h5 className="text-2xl font-medium text-gray-900">
            Create new meal item
          </h5>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            {base64 && (
              <>
                <img
                  className="pt-5"
                  src={base64}
                  alt={imageName}
                  style={{ maxWidth: '200px' }}
                />
              </>
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
              id="title"
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
              onChange={e => setCalories(e.target.value)}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-600 focus:border-default-600 block w-full p-2.5 outline-0"
              pattern="^[1-9]\d*$"
              placeholder="Write calories here..."
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
              onChange={e => setPrice(e.target.value)}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-600 focus:border-default-600 block w-full p-2.5 outline-0"
              pattern="^[1-9]\d*$"
              placeholder="Write price here..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="image-name"
              className="block mb-4 text-base font-medium text-gray-900"
            >
              Image name
            </label>
            <input
              type="text"
              id="image-name"
              onChange={e => setImageName(e.target.value)}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-600 focus:border-default-600 block w-full p-2.5 outline-0"
              placeholder="Write image name here..."
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full text-white bg-default-700 hover:bg-default-800 focus:ring-4 focus:outline-none focus:ring-default-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Create meal
          </button>
        </form>
      </div>
    </div>
  );
}
