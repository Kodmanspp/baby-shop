import React from 'react';
import styles from './ClothesCard.module.scss';
import clothe from '../../public/icons/baby_clothes.png';
import Image from 'next/image';
import favoriteIcon from '../../public/icons/favorite.svg';
import palkaIcon from '../../public/icons/palkaebanaya.svg';
import cartIcon from '../../public/icons/cart.svg';
function ClothesCard({ cardArray }) {
  return (
    <>
      {cardArray.map((item, index) => {
        return (
          <div key={index} className={styles.card_wrapper}>
            <span className={styles.card_year}>2-4 лет</span>
            <span className={styles.card_type}>новинка</span>
            <div className={styles.card_clothes__image}>
              <Image src={clothe} alt='clothes' />
            </div>
            <div className={styles.card_about_clothes}>
              <div>
                <div>
                  <span className={styles.card_title}>Футболка “Радуга”</span>
                </div>
                <div>
                  Артикуль:{' '}
                  <span className={styles.card_about__title}>11111</span>
                </div>
                <div>
                  Рост: <span className={styles.card_about__title}> 54-56</span>
                </div>
                <div>
                  Цена:{' '}
                  <span className={styles.card_about__title}>за 10 шт</span>
                </div>
                <div>
                  Размер: <span className={styles.card_about__title}>1-7</span>
                </div>
              </div>
              <div className={styles.price_wrapper}>
                <h4>1300 ₽</h4>
              </div>
            </div>
            <div className={styles.card_action_buttons}>
              <div>
                <button>
                  <Image src={favoriteIcon} alt='knopka' />
                </button>
              </div>
              <div>
                <Image src={palkaIcon} alt='knopka' />
              </div>
              <div>
                <button>
                  <Image src={cartIcon} alt='knopka' />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ClothesCard;
