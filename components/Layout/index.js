import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import styles from '../Layout/Navbar/Navbar.module.scss';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Menu from '../Menu/Menu';
import { useState } from 'react';
import 'antd/dist/antd.css';
import top_arrow from '../../public/icons/top_arrow.svg';
import comment_main from '../../public/icons/comment_main_page.svg';
import Image from 'next/image';

function Layout({ children }) {
  const [menuActive, setMenuActive] = useState(false);
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
            <Link href={'/Delivery/Delivery'}>
              <a>Как заказать</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
              <a>Доставка</a>
            </Link>
          </div>
          <div>
            <Link href={'/reviewspage'}>
              <a>Отзывы</a>
            </Link>
          </div>
          <div>
            <Link href={'/'}>
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
      <div className={styles.action_wrapper}>
        <div>
          <Link href={'/'}>
            <a>
              <Image src={top_arrow} width={44} height={44} alt={'lol'} />
            </a>
          </Link>
        </div>
        <div>
          <Link href={'/'}>
            <a>
              <Image src={comment_main} width={50} height={50} alt={'lol'} />
            </a>
          </Link>
        </div>
      </div>
      {children}
      <Footer />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
}

export default Layout;
