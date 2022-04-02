import React from 'react';
import styles from './About.module.scss'
import img1 from '../../public/icons/img1.png'
import img2 from '../../public/icons/img2.png'
import Image from 'next/image';

const About = () => {

    return (
        <div>
            <h2 className={styles.about_title}>Об оптовом магазине «Baby Shop»</h2>

            <div className={styles.about_block}>
                <div className={styles.about_one}>
                <p>
                  Дорогие клиенты, приветствуем вас на нашем официальном сайте «Baby Shop»!
                  Мы рады предотавить вам возможность легко и удобно заказать детскую вещь для вашего бизнеса!
                </p>
                </div>
                <div className={styles.about_two}>
                 <Image src={img1} alt="error"/>
                </div>                
            </div>

            <div className={styles.about_block_two}>

                <div className={styles.about_two_img}>
                  <Image src={img2} alt="error"/>
                </div> 

                <div className={styles.about_one}>
                <p>
                Закупаясь, наши специалисты компании смотрят на качество товаров и оценивают их с точки зрения качества материалов и удобства. Поэтому наши вещи пользуются повышенным спросом у покупателей. Большое внимание мы уделяем вопросам цен. Работаем над тем, чтобы наши клиенты могли покупать качественные вещи по оптимальной стоимости.
                </p>
                </div>
                               
            </div>
        </div>
    );
};

export default About;