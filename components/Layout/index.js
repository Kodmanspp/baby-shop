import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import 'antd/dist/antd.css';
import styles from '../Layout/Navbar/Navbar.module.scss';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Menu from '../Menu/Menu';
import { useState } from 'react';
import 'antd/dist/antd.css';
import top_arrow from '../../public/icons/top_arrow.svg';
import comment_main from '../../public/icons/comment_main_page.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Layout({ children }) {
  const [menuActive, setMenuActive] = useState(false);
  const router = useRouter();

  return (
    <div>
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className={styles.navbar_routes_wrapper}>
        {router.pathname === '/favorite' ? null : (
          <div
            className={
              router.pathname === '/cart' ? styles.navbar : styles.navbar_routes
            }
          >
            {router.pathname === '/cart' ? null : (
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
            )}
          </div>
        )}
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
