'use client';

import { useEffect, useState } from 'react';
import MealService from '@/api/meal/service/meal-service';
import ByteArrayToImage from '@/utils/byte-array-to-image';
import { MealRequestResponse } from '@/api/meal/request/meal-request-response';
import MenuGallery from '@/components/menu-gallery';
import ScrollToTopButton from '@/components/scroll-to-top-button';

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

  return (
    <div>
      <MenuGallery items={[...meals]} />
      <ScrollToTopButton />
    </div>
  );
}
