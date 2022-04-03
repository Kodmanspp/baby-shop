import React from 'react';
import styles from './ReviewsPage.module.scss';
import { Rate } from 'antd';
function ReviewsPage() {
  return (
    <div className={styles.reviews_wrapper}>
      <h2 className={styles.title}> Отзывы об интернет-магазине “Baby Shop”</h2>
      <div className={styles.reviews_action}>
        <h3 className={styles.rew_title}>Оставьте ваш отзыв:</h3>
        <div className={styles.form_wrapper}>
          <div className={styles.input_wrapper}>
            <div>
              <label>
                Имя * <br />
                <input className={styles.name_input} type='text' />
              </label>
            </div>
            <div>
              <label>
                Email <br />
                <input className={styles.email_input} />
              </label>
            </div>
            <div className={styles.rate_wrapper}>
              <label>Оценка:</label>
              <Rate allowHalf defaultValue={2.5} />
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
    </div>
  );
}

export default ReviewsPage;
