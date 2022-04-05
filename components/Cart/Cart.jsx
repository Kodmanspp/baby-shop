import React from 'react';
import { cardArray } from '../MainPage/MainPageData';
import styles from './Cart.module.scss';
import ClothesCard from '../MainPageCards/ClothesCard';
function Cart() {
  return (
    <div className={styles.cart_wrapper}>
      <ClothesCard cardArray={cardArray} />
      <div>
        <button className={styles.all_catalog__button}>смотреть каталог</button>
      </div>
    </div>
  );
}

export default Cart;
