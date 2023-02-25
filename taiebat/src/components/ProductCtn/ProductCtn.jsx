import React from 'react'
import ProductTitle from '../ProductTitle/ProductTitle'
import Ingredients from '../Ingredients/Ingredients'
import Img from '../Img/Img'
import Price from '../Price/Price'
import S from './ProductCtn.module.css'

/*objeto product 
title
ingredients = []
img =
price =
cents = 
*/
const ProductCtn = () => {
  return (
    <div className={S.productCtn}>
        <ProductTitle/>
        <div className={S.productInfo}>
            <Ingredients/>
            <div className={S.imgPrice}>
                <Img/>
                <Price/>
            </div>
        </div>

    </div>
  )
}

export default ProductCtn