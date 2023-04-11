import React from 'react';
import styles from './ExpenseCard.module.css';

interface ExpenseCardProps {
  id: string;
  category: string;
  amount: number;
  date: number;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ id, category, amount, date }) => {
  return (
    <div className={styles.card}>
      <div className={styles.category}>{category}</div>
      <div className={styles.amount}>{amount}円</div>
      <div className={styles.date}>{new Date(date).toLocaleString()}</div>
      <div className={styles.buttons}>
        <button>編集</button>
        <button>削除</button>
      </div>
    </div>
  );
};

export default ExpenseCard;
