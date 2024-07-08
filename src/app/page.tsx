'use client';

import MenuGallery from '@/components/menu-gallery';
import { useEffect, useState } from 'react';
import { MealRequestResponse } from '@/api/meal/request/meal-request-response';
import MealService from '@/api/meal/service/meal-service';
import ByteArrayToImage from '@/utils/byte-array-to-image';

export default function Home() {
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

  return <MenuGallery items={[...meals]} />;
}
