'use client';
import React, { ChangeEvent, useState } from 'react';
import ByteArrayToImage from '@/utils/byte-array-to-image';
import MealService from '@/api/meal/service/meal-service';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface FormItemProps {
  formTitle: string;
  initialTitle: string;
  initialDescription: string;
  initialPrice: string;
  initialCalories: string;
  initialImage: string;
  initialImageName: string;
}

export default function UpdateForm(props: FormItemProps) {
  const [description, setDescription] = useState(props.initialDescription);
  const [price, setPrice] = useState(props.initialPrice);
  const [calories, setCalories] = useState(props.initialCalories);
  const [imageName, setImageName] = useState(props.initialImageName);
  const [base64, setBase64] = useState<string>(
    ByteArrayToImage(props.initialImage),
  );
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

    if (!description.trim()) {
      toast.error('Please enter a valid description.');
      return;
    }

    // Validate price
    const priceRegex = /^[1-9]\d*$/;
    if (!price.match(priceRegex)) {
      toast.error('Please enter a valid price.');
      return;
    }

    // Validate calories
    if (!calories.match(priceRegex)) {
      toast.error('Please enter a valid calorie count.');
      return;
    }

    // Validate image name
    if (!imageName.trim()) {
      toast.error('Please enter a valid image name.');
      return;
    }

    MealService.update(props.initialTitle, {
      title: props.initialTitle,
      description: description.trim(),
      price: Number(price),
      calories: Number(calories),
      image: base64.slice(22),
      imageName: imageName.trim(),
    })
      .then(() => {
        router.push('/admin');
        toast.success('Meal updated successfully!');
      })
      .catch(error => {
        toast.error('Failed to update meal.');
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-default-50">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form className="space-y-6">
          <h5 className="text-2xl font-medium text-gray-900">
            {props.formTitle}
          </h5>
          <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
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
              value={imageName}
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
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}
