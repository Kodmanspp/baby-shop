import React from 'react';
import styles from './MainPage.module.scss';
import pocan from '../../public/icons/pocan.png';
import telka from '../../public/icons/telka.png';
import top_arrow from '../../public/icons/top_arrow.svg';
import comment_main from '../../public/icons/comment_main_page.svg';
import elipse from '../../public/icons/Ellipse.png';
import Image from 'next/image';
import ClothesCard from '../../components/MainPageCards/ClothesCard';

function MainPage() {
  const headerArray = [
    { title: 'МИНИМАЛЬНАЯ СУММА ЗАКАЗА - 8000 ₽' },
    { title: 'КАЧЕСТВЕННЫЕ ВЕЩИ' },
    { title: 'БЫСТРАЯ ДОСТАВКА' },
    { title: 'БОЛЬШИЕ СКИДКИ' },
  ];

  const cardArray = [
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Пионер”',
      years: '2-4 лет',
      type: null,
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '900',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: null,
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: null,
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
    {
      title: 'Футболка “Радуга”',
      years: '2-4 лет',
      type: 'новинка',
      article: '1111',
      height: '54-56',
      priceOf: 'за 10 шт',
      size: '1-7',
      price: '1300',
    },
  ];
  return (
    <>
      <div className={styles.main_wrapper}>
        <div className={styles.left_side}>
          <div className={styles.header_title}>
            <h1>ДЕТСКАЯ ОДЕЖДА ОПТОМ В МОСКВЕ</h1>
          </div>
          {headerArray.map((item) => (
            <div key={item.title} className={styles.hedaer_sub_title}>
              <Image src={elipse} alt='elipse' />
              <span>{item.title}</span>
            </div>
          ))}
          <div>
            <button className={styles.header_button}>СМОТРЕТЬ КАТАЛОГ</button>
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.baby_wrapper}>
            <Image src={pocan} alt={'lol'} />
            <Image src={telka} alt={'lol'} />
          </div>
          <div className={styles.action_wrapper}>
            <a href={'/'}>
              <Image src={top_arrow} width={44} height={44} alt={'lol'} />
            </a>
            <a href={'/'}>
              <Image src={comment_main} width={50} height={50} alt={'lol'} />
            </a>
          </div>
        </div>
        {/* new collection wrapper */}
      </div>
      <div className={styles.new_collection_wrapper}>
        <h1 className={styles.new_collection_title}>новая коллекция</h1>
        <div className={styles.new_collection_card}>
          <ClothesCard cardArray={cardArray} />
        </div>
        <div className={styles.all_catalog_button}>
          <button>Весь каталог</button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
