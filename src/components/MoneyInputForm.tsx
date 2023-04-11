import React from 'react';
import styles from './MoneyInputForm.module.css';

const MoneyInputForm: React.FC = () => {
  const ClickButton = (): void => {
    alert('登録しました');

    // TODO: ここで入力された値を取得する
  };

  return (
    <div className={styles["form-container"]}>
      <h1 className={styles["form-title"]}>金銭ログ</h1>
      <form>
        <div className={styles["form-group"]}>
          <label className={styles["form-label"]}>日付</label>
          <input type="date" className={styles["input-field"]} />
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["form-label"]}>金額</label>
          <input type="number" className={styles["input-field"]} />
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["form-label"]}>カテゴリ</label>
          <select className={styles["input-field"]}>
            <option value="食費">食費</option>
            <option value="交通費">交通費</option>
            <option value="日用品">日用品</option>
            <option value="娯楽">娯楽</option>
            <option value="その他">その他</option>
          </select>
        </div>
        <button className={styles["submit-button"]} onClick={ClickButton}>
          登録
        </button>
      </form>
    </div>
  );
};

export default MoneyInputForm;
