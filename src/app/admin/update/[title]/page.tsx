'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import InputForm from '@/components/admin/input-form-meal';
import MealService from '@/api/meal/service/meal-service';
import { MealRequestResponse } from '@/api/meal/body/meal-request-response';
import resolveError from '@/utils/resolve-error';
import ErrorPage from '@/components/common/error-page';

enum PageState {
  LOADING,
  SUCCESS,
  ERROR,
}

export default function Home() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const title = segments[segments.length - 1];
  const [meal, setMeal] = useState({} as MealRequestResponse);
  const [pageState, setPageState] = useState<PageState>(PageState.LOADING);
  const [error, setError] = useState<number>(0);

  useEffect(() => {
    MealService.get(title)
      .then(meal => {
        setMeal(meal);
        setPageState(PageState.SUCCESS);
      })
      .catch(error => {
        setError(resolveError(error));
        setPageState(PageState.ERROR);
      });
  }, [title]);

  return (
    <>
      {(pageState === PageState.SUCCESS && (
        <InputForm
          formTitle={`Update ${title}`}
          initialTitle={title as string}
          initialDescription={meal.description}
          initialPrice={String(meal.price)}
          initialImage={meal.image}
          initialCalories={String(meal.calories)}
          initialImageName={meal.imageName}
        />
      )) ||
        (pageState === PageState.LOADING && (
          <div className="flex justify-center items-center min-h-screen bg-default-50">
            <div className="flex flex-col items-center">
              <svg
                className="animate-spin h-12 w-12 text-default-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C6.48 0 2 4.48 2 10h2zm2 5.292A7.952 7.952 0 014 12H2c0 3.314 2.686 6 6 6v-2.708z"
                ></path>
              </svg>
              <p className="mt-4 text-default-600 text-lg font-medium">
                Loading, please wait...
              </p>
            </div>
          </div>
        )) ||
        (pageState === PageState.ERROR && <ErrorPage error={error} />)}
    </>
  );
}
