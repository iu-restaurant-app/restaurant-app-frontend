'use client';

import Gallery from '@/components/menu/gallery';
import MenuGallery from '@/components/admin/menu-gallery';
import ScrollToTopButton from '@/components/common/scroll-to-top-button';
import React, { useState } from 'react';
import Navbar from '@/components/common/navbar';
import Sidebar from '@/components/common/sidebar';
import SEO from '@/components/common/seo';
import Modal from '@/components/admin/modal';
import Overlay from '@/components/admin/overlay';
import MealService from '@/api/meal/service/meal-service';
import { useMealStore } from '@/hooks/useMealStorage';
import { toast } from 'react-hot-toast';
import { useCartStore } from '@/hooks/useCartStorage';

export default function Home() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const { itemToDelete, setItemToDelete, mealItems, setMealItems } =
    useMealStore(state => state);
  const { removeFromCart } = useCartStore(state => state);

  function showModal() {
    setIsModalShown(true);
    document.body.classList.add('overflow-hidden');
  }

  function hideModal() {
    setIsModalShown(false);
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <>
      <SEO
        title={'Pasta Palace Menu'}
        description={
          'Admin Page with menu where everyone can create, edit, delete meals'
        }
      />
      {isModalShown && <Overlay />}
      <div>
        <Navbar
          isOpen={isOpenSidebar}
          setIsOpen={setIsOpenSidebar}
          admin={true}
        />
        <Sidebar
          isOpen={isOpenSidebar}
          setIsOpen={setIsOpenSidebar}
          isAboutUs={false}
        />
        <Gallery />
        <MenuGallery handleModalShown={() => showModal()} />
        {isModalShown && (
          <Modal
            cancelFunction={() => hideModal()}
            deleteFunction={() => {
              if (itemToDelete) {
                setMealItems(
                  mealItems.filter(item => item.title !== itemToDelete),
                );
                removeFromCart(itemToDelete);
                MealService.delete(itemToDelete).then(() =>
                  toast.success('Successfully deleted!'),
                );
                hideModal();
                setItemToDelete(null);
              }
            }}
          />
        )}
        <ScrollToTopButton
          color={'bg-default-600'}
          onHoverColor={'bg-default-800'}
        />
      </div>
    </>
  );
}
