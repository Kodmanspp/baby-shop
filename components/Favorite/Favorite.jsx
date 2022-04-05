import React from 'react';
import styles from './Favorite.module.scss';
import FavoriteCard from './FavoriteCard';

function Favorite() {
  return (
    <div className={styles.favorite_wrapper}>
      <div className={styles.favorite_header_wrapper}>
        <div className={styles.favorite_header_wrapper_child}>
          <div>
            <span>Товар</span>
          </div>
          <div>
            <span>Наименование</span>
          </div>
          <div>
            <span>Количество</span>
          </div>
          <div>
            <span>Наличие</span>
          </div>
          <div>
            <span>Цена</span>
          </div>
        </div>
      </div>
      <div className={styles.favorite_card_wrapper}>
        <FavoriteCard />
      </div>
    </div>
  );
}

export default Favorite;
