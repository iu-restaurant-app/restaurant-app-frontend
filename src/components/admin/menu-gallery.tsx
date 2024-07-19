'use client';

import React, { useEffect, useState } from 'react';
import MealService from '@/api/meal/service/meal-service';
import ByteArrayToImage from '@/utils/byte-array-to-image';
import MenuItem from '@/components/admin/menu-item';
import { useMealStore } from '@/hooks/useMealStorage';
import MenuSearch from '@/components/menu/menu-search';
import { MenuItemProps } from '@/components/menu/menu-item/menu-item';

enum PageState {
  LOADING,
  SUCCESS,
  ERROR,
}

interface MenuGalleryProps {
  handleModalShown: () => void;
}

export default function MenuGallery(props: MenuGalleryProps) {
  const [pageState, setPageState] = useState<PageState>(PageState.LOADING);
  const [error, setError] = useState<number>();
  const { mealItems, setMealItems } = useMealStore(state => state);
  const dictionary: Record<string, number> = {
    ERR_NETWORK: 502,
    BAD_REQUEST: 400,
  };
  const [filteredMealItems, setFilteredMealItems] =
    useState<MenuItemProps[]>(mealItems);
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (search: string) => {
    setSearchText(search);
    if (search === '') {
      setFilteredMealItems(mealItems);
    } else {
      const filteredItems = mealItems.filter((item: MenuItemProps) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredMealItems(filteredItems);
    }
  };

  useEffect(() => {
    MealService.getAll()
      .then(response => {
        response.forEach(item => {
          item.image = ByteArrayToImage(item.image);
        });
        setMealItems(response);
        setPageState(PageState.SUCCESS);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          setError(error.response.status);
        } else {
          console.log(error);
          setError(dictionary[error.code]);
        }
        setPageState(PageState.ERROR);
      });
  }, []);

  return (
    <div style={{ minHeight: '1000px' }}>
      <MenuSearch onSearchChange={handleSearchChange} />
      {(pageState === PageState.LOADING && (
        <div className="z-0 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-[100px]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index: number) => (
            <div
              key={index}
              role="status"
              className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6"
            >
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded">
                <svg
                  className="w-10 h-10 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full "></div>
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
                  <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          ))}
        </div>
      )) ||
        (pageState === PageState.ERROR && (
          <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600">
                  {error}
                </h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
                  Something is missing.
                </p>
                <p className="mb-4 text-lg font-light text-gray-500">
                  Sorry, something went wrong. Try again later.{' '}
                </p>
                <a
                  href="/"
                  type="submit"
                  className="inline-flex text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
                >
                  Back to Homepage
                </a>
              </div>
            </div>
          </section>
        )) ||
        (pageState === PageState.SUCCESS && (
          <>
            {(searchText !== '' ? filteredMealItems : mealItems).length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-[100px]">
                {(searchText !== '' ? filteredMealItems : mealItems).map(
                  (item: MenuItemProps, index: number) => (
                    <MenuItem
                      key={index}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      calories={item.calories}
                      image={item.image}
                      handleDelete={props.handleModalShown}
                    />
                  ),
                )}
              </div>
            ) : (
              <div className="text-center text-gray-700 mt-8 text-xl md:text-3xl font-bold">
                No meals were found
              </div>
            )}
          </>
        ))}
    </div>
  );
}
