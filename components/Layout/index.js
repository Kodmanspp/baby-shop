import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import styles from './Navbar/Navbar.module.scss';
import Link from 'next/link'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={styles.navbar_routes}>
        <div>
          <Link href={'/'}>
            <a >главная</a> 
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
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
