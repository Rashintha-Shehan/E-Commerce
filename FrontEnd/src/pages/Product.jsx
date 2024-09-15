import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets';
import RelatedProduct from '../Component/RelatedProduct';
const Product = () => {

  const {ProductId} = useParams();
  const {products,currency}=useContext(ShopContext);
  const [ProductData,setProductData]=useState(false);
  const[image,setImage]=useState('')
  const [size,setSizes] =useState('')


const fetchProductData=async ()=>{

  products.map((item)=>{
    if (item._id==ProductId) {
      setProductData(item)
      console.log(item);
      setImage(item.image[0])
      return null;
    }
  })
}

useEffect(()=>{
fetchProductData();
},[ProductId])

  return ProductData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

<div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
  <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justity-between sm:justify-normal sm:w-[18.7%] w-full'>
  {  ProductData.image.map((item,index)=>(
<img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
    ))
    }
  </div>
      <div className='w-full sm:w-[80%]'>
        <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/*--------product info---------*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 '>{ProductData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon}  alt="" className="w-3 5" />
            <img src={assets.star_icon}  alt="" className="w-3 5" />
            <img src={assets.star_icon}  alt="" className="w-3 5" />
            <img src={assets.star_dull_icon}  alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{ProductData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{ProductData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Pot Size</p>
            <div className='flex gap-2'>
              {ProductData.sizes.map((item,index)=>(
                <button onClick={()=>setSizes(item)} className={`border py-2 px-4 bg-gray-100 ${item=== size ? `border-orange-500`: '' }`} key={index}>{item}</button>
              ))}
            </div>
          </div>
              <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Echo Friendly Product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Return cannot acceptable.</p>
              </div>
        </div>
      </div>
        {/*----Description and review */}
        <div className='mt-20'>
                <div className='flex'>
                  <b className='border px-5 py-3 text-sm'>Description</b>
                  <p className='border px-5 py-3 text-sm'>Review(122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                  <p>Welcome to our E-Commerce platform, where shopping is made simple, fast, and enjoyable. Explore a wide range of products across various categories, including bestsellers, sizes, and more, all curated to meet your needs. Our intuitive design ensures that browsing through collections is easy, with clear product images and detailed descriptions to help you make informed decisions. Whether you're searching for a specific item or just browsing, our advanced filtering and sorting options will guide you to the perfect product in no time.</p>
                  <p>Our website is designed with your convenience in mind. Powered by modern technologies, it offers a seamless and responsive shopping experience across all devices. From selecting products to completing your purchase, every step is smooth and secure.</p>
                </div>
              </div>
              {/* Display Related product */}

              <RelatedProduct category ={ProductData.category}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
