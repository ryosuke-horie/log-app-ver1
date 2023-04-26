import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeightList = () => {
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://127.0.0.1/api/weights');
        setWeights(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/weights/${id}`);
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
