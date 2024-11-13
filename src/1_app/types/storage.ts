// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Импортируй свои редюсеры, если есть
// import counterReducer from './features/counter/counterSlice';

const store = configureStore({
  reducer: {
    // counter: counterReducer, // можно добавить другие редюсеры здесь
  },
});

export default store;
