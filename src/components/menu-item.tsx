'use client'
import NumberInputButton from "@/components/number-input-button";
import AddToCartButton from "@/components/add-to-cart";
import {useState} from "react";

interface MenuItemProps {
    title: string;
    description: string;
    price: number;
}

export default function MenuItem(props: MenuItemProps) {
    const [addToCart, setAddToCart] = useState(true);
    return (

        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg"
                   src="/Pizza.jpg"
                   alt="pizza"/>

            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                {addToCart? (
                    <AddToCartButton onClick={() => setAddToCart(false)} price={50} />
                ) : (
                    <NumberInputButton whenAmountBelowOne={() => setAddToCart(true)} />
                )}

            </div>
        </div>

    )
}