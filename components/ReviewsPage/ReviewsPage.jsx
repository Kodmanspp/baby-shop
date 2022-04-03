import React from 'react';
import styles from './ReviewsPage.module.scss';
import { Rate } from 'antd';
import rectangleOne from '../../public/icons/Rectangle 163.png';
import Image from 'next/image';
import { StarOutlined } from '@ant-design/icons';
import Card from '../MainPageReviewCard/Card';

function ReviewsPage() {
  return (
    <div className={styles.reviews_wrapper}>
      <h2 className={styles.title}> Отзывы об интернет-магазине “Baby Shop”</h2>
      <div className={styles.reviews_action}>
        <h3 className={styles.rew_title}>Оставьте ваш отзыв:</h3>
        <div className={styles.form_wrapper}>
          <div className={styles.input_wrapper}>
            <div className={styles.label_name}>
              <label>Имя *</label>
              <input className={styles.name_input} type='text' />
            </div>
            <div>
              <label>Email</label>
              <input className={styles.email_input} />
            </div>
            <div className={styles.rate_wrapper}>
              <label>Оценка:</label>
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <div style={{ marginTop: 100 }}>
              <div>
                <h3 className={styles.title_maga}>Общий рейтинг магазина:</h3>
                <h4 className={styles.title_maga}>4.5 на основе 12 отзывов</h4>
                <div>
                  <div>
                    <button className={styles.star_button}>
                      <StarOutlined style={{ color: 'orange' }} />
                    </button>
                  </div>
                  <div>
                    <button className={styles.star_button}>
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                    </button>
                  </div>
                  <div>
                    <button className={styles.star_button}>
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                    </button>
                  </div>
                  <div>
                    <button className={styles.star_button}>
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                    </button>
                  </div>
                  <div>
                    <button className={styles.star_button}>
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                      <StarOutlined
                        style={{ color: 'orange', marginLeft: 5 }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.textarea_wrapper}>
            <label>Отзыв:</label>
            <textarea />
            <div className={styles.textarea_spam}>
              <div>
                <span>Проверка на спам:</span>
              </div>
              <div className={styles.spam_check}>
                <span>89 + 44 = </span>
                <input type='number' />
              </div>
              <div className={styles.checkbox_wrapper}>
                <input type='checkbox' />
                <span>
                  {' '}
                  Нажимая на кнопку “Отправить отзыв”, я даю согласиена
                  обработку персональных данных*
                </span>
              </div>
              <div className={styles.send_button_wrapper}>
                <button>Отправить отзыв</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviews}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.all_otsivs}>
        <button>все отзывы</button>
      </div>
    </div>
  );
}

export default ReviewsPage;
