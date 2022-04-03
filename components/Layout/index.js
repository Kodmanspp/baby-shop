import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import 'antd/dist/antd.css';
import styles from '../Layout/Navbar/Navbar.module.scss';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Menu from '../Menu/Menu';
import { useState } from 'react';
import 'antd/dist/antd.css';

function Layout({ children }) {
  const [menuActive, setMenuActive] = useState(false);
  console.log(menuActive);
  return (
    <div>
      <Navbar />
      <div className={styles.navbar_routes_wrapper}>
        <div className={styles.navbar_routes}>
          <div>
            <Link href={'/mainpage'}>
              <a>главная</a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a>каталог</a>
            </Link>
          </div>
          <div>
            <Link href='/AboutMagazine/About'>
              <a>о магазине</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Как заказать</a>
            </Link>
          </div>
          <div>
            <Link href={'/Delivery/Delivery'}>
              <a>Доставка</a>
            </Link>
          </div>
          <div>
            <Link href={'/reviewspage'}>
              <a>Отзывы</a>
            </Link>
          </div>
          <div>
            <Link href={'/Contact/Contact'}>
              <a>Контакты</a>
            </Link>
          </div>
        </div>
        <div className={styles.navbar_burger}>
          <button onClick={() => setMenuActive(!menuActive)}>
            <MenuOutlined />
          </button>
        </div>
      </div>
      {children}
      <Footer />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
}

export default Layout;
