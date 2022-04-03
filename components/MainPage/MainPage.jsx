import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import pocan from '../../public/icons/pocan.png';
import telka from '../../public/icons/telka.png';
import top_arrow from '../../public/icons/top_arrow.svg';
import comment_main from '../../public/icons/comment_main_page.svg';
import elipse from '../../public/icons/Ellipse.png';
import profileIcon from '../../public/icons/zeleniyChel.png';
import Image from 'next/image';
import ClothesCard from '../MainPageCards/ClothesCard';
import Card from '../MainPageReviewCard/Card';
import { accordionArray, cardArray, headerArray } from './MainPageData';
import Accordion from '../Accordion/Accordion';

function MainPage() {
  const [selectedAccor, setSelectedAccor] = useState(null);

  const toggleAccordion = (index) => {
    if (selectedAccor === index) {
      return setSelectedAccor(null);
    }
    setSelectedAccor(index);
  };
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
      {/* reviews */}
      <div className={styles.reviews_wrapper}>
        <div className={styles.reviews}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className={styles.all_reviews_button}>
          <button>все отзывы</button>
        </div>
        <div className={styles.send_reviews_wrapper}>
          <div>
            <Image src={profileIcon} alt='profileIcon' />
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ marginBottom: 20 }}>
              <span>Анонимный пользователь</span>
            </div>
            <div className={styles.send_review_action}>
              <div className={styles.textarea_wrapper}>
                <textarea />
              </div>
              <div className={styles.action_button_wrapper}>
                <div>
                  <button className={styles.login_button}>войти</button>
                </div>
                <div>
                  <button className={styles.publish_button}>
                    опубликовать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.accordion_wrapper}>
          <h2>ВОПРОС-ОТВЕТ</h2>
          <div className={styles.accordion_zxc}>
            {accordionArray.map((item, index) => {
              return <Accordion title={item.question} content={item.answer} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
