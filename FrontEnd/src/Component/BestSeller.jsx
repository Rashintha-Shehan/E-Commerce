import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {
    const { products } = useContext(ShopContext); 
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        if (Array.isArray(products)) {
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSellers(bestProduct.slice(0, 5)); 
        } else {
            console.error("Products is not an array or is undefined");
        }
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover our most popular items, loved by customers for their quality and style. Each product in this collection has earned its
                 spot through rave reviews and high demand. Shop now to see why these best sellers are favorites among many!
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSellers.length > 0 ? (
                    bestSellers.map((item) => (
                        <ProductItem 
                            key={item._id} 
                            id={item._id} 
                            name={item.name} 
                            image={item.image} 
                            price={item.price} 
                        />
                    ))
                ) : (
                    <p>No best sellers available</p>
                )}
            </div>
        </div>
    );
};

export default BestSeller;
