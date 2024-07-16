'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import InputForm from '@/components/admin/input-form-meal';

function Page() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const title = segments[segments.length - 1];

  if (!title) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <InputForm
        formTitle={`Update ${title}`}
        initialTitle={title as string}
        initialDescription={''}
        initialPrice={0}
        initialImage={''}
        initialCalories={0}
        key={0}
      ></InputForm>
    </>
  );
}

export default Page;
