import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "../features/counter/sliceCounter.js";
import walletSlice from '../reducers/walletSlice';
// import service yang dibutuhkan
import { colorAPI } from "../services/colorAPI.js";

const store = configureStore({
  
    reducer: {
      wallet: walletSlice,
      counterRTK: counterSlice,
      // Di sini kita akan menambahkan reducerPathnya ke dalam sini
      // perhatikan di sini menggunakan "array", karena di dalam object tidak bisa menggunakan "dot"

      // Perasaan kita ga buat reducer yah?
      // Yes, dibuatkan SECARA OTOMATIS pada saat kita menggunakan createApi
      [colorAPI.reducerPath]: colorAPI.reducer
    },
     // Misalnya ini untuk tingkat lanjut, ingin menggunakan caching, invalidation (untuk refresh data),
    // ataupun untuk polling datanya
    // bisa menggunakan middleware

    // Menambahkan middleware untuk caching, invalidation, polling
    // menerima sebuah fungsi yang menerima parameter getDefaultMiddleware (sebuah fungsi juga)
    middleware: (getDefaultMiddleware) =>
     // Di sini kita akan menggabungkan middleware dari reqresinColorAPI ke default middlewarenya
    // Kapan kita bikinnya yah? Lagi lagi, dibuatkan secara otomatis pada saat kita mendefinisikan
    // dalam createApi di service (wuoah......)
    getDefaultMiddleware().concat(colorAPI.middleware),
});

export default store;