'use client';

import MenuItem, { MenuItemProps } from '@/components/menu-item';
import { useEffect, useState } from 'react';
import { MealRequestResponse } from '@/api/meal/request/meal-request-response';
import MealService from '@/api/meal/service/meal-service';
import ByteArrayToImage from '@/utils/byte-array-to-image';

export default function MenuGallery() {
  const [meals, setMeals] = useState([] as MealRequestResponse[]);
  useEffect(() => {
    MealService.getAll()
      .then(response => {
        response.forEach(item => {
          item.image = ByteArrayToImage(item.image);
        });
        setMeals(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-[100px]">
      {meals.map((item: MenuItemProps, index: number) => (
        <MenuItem
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          calories={item.calories}
          image={item.image}
        />
      ))}
    </div>
  );
}
