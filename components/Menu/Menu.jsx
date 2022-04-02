import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import styles from './Menu.module.scss';

function Menu({ menuActive, setMenuActive }) {
  return (
    <div className={menuActive ? styles.menuActive : styles.menu}>
      <div className={styles.menu_content}>
        <div className={styles.navbar_burger}>
          <button onClick={() => setMenuActive(!menuActive)}>
            <MenuOutlined />
          </button>
        </div>
        <div className={styles.navbar_links}>
          <div>
            <Link href={'/'}>
              <a>главная</a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a>каталог</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>о магазине</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Как заказать</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Доставка</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Отзывы</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Контакты</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
