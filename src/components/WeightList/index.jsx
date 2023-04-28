import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeightList = () => {
  const [weights, setWeights] = useState([]);
  // const API_BASE_URL = 'https://healthcare-bxrot8ge5-ryosuke-horie.vercel.app'; // <- VercelアプリのURLを設定
  const API_BASE_URL = 'http://127.0.0.1';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/weights`); // <- URLを変更
        setWeights(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/weights/${id}`); // <- URLを変更
      setWeights(weights.filter((weight) => weight.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>登録された体重データ</h2>
      {weights.length === 0 ? (
        <p>登録された体重データはありません。</p>
      ) : (
        <ul>
          {weights.map((weight) => (
            <li key={weight.id}>
              {weight.weight}kg{' '}
              <button onClick={() => handleDelete(weight.id)}>削除</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WeightList;
