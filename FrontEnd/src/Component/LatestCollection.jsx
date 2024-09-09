import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext'; 
import ProductItem from './ProductItem'; 
import Title from './Title'; 
const LatestCollection = () => {
  const { products } = useContext(ShopContext); 
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
   
    if (Array.isArray(products)) {
      setLatestProduct(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>

Explore the latest additions to our collection, carefully curated to bring you the best in style and innovation.
 From timeless classics to cutting-edge designs, our newest pieces reflect a perfect balance of quality, elegance, and functionality.
  Whether you're updating your wardrobe or seeking the perfect gift, our latest collection offers something for everyone.
   Experience the allure of fresh trends, meticulously crafted to suit every occasion and elevate your style effortlessly. 
   Don't miss out on these exclusive selections, designed to make you stand out with confidence and sophistication.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {Array.isArray(latestProduct) && latestProduct.length > 0 ? (
          latestProduct.map((item) => (
            <ProductItem 
              key={item._id} 
              id={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default LatestCollection;
