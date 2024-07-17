'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import InputForm from '@/components/admin/input-form-meal';

export default function Home() {
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
        initialDescription=""
        initialPrice=""
        initialImage=""
        initialCalories=""
      ></InputForm>
    </>
  );
}
