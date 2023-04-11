import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyA0lNwhBHfLoDjd_1m4-mJXGUkCfOCwTh4',
  authDomain: 'mylogapp-272b1.firebaseapp.com',
  databaseURL: 'https://mylogapp-272b1-default-rtdb.firebaseio.com',
  projectId: 'mylogapp-272b1',
  storageBucket: 'mylogapp-272b1.appspot.com',
  messagingSenderId: '42314394501',
  appId: '1:42314394501:web:95ab70355e2becf93472ec',
}

// Firebase アプリを初期化
const app = initializeApp(firebaseConfig)

// Realtime Database インスタンスを取得
export const database = getDatabase(app)
