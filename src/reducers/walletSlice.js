import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = { user: {}, balance: 100000 };

// Ini adalah Thunk agar kita bisa melakukan async logic
// Dia dapat di-dispatch seperti action biasa
export const userAsync = createAsyncThunk(
  'wallet/fetchUser',
  async (id) => {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      // Return menjadi `fulfilled` action payload
      // Karena axios membungkus dalam data, dan return dari API juga ada data
      // Makanya datanya jadi 2x
      return response.data.data;
  }
);

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    deposit: (state, action) => {
      // Di sini seakan-akan langsung mengubah state,
      // Tapi sebenarnya tidak karena menggunakan Immer library
      // Untuk nama parameternya akan selalu menjadi payload
      state.balance += action.payload.amount;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload.amount;
    },
  },

  // `extraReducers` adalah field tambahan untuk menghandle actions
    // yang dibuat oleh createAsyncThunk
    extraReducers: (builder) => {
      builder
          .addCase(userAsync.fulfilled, (state, action) => {
              state.user = action.payload;
          })
          .addCase(userAsync.pending, () => {
              console.log(`loading`);
          })
          .addCase(userAsync.rejected, () => {
              console.log(`fail to get user`);
          });
  },
});



// Akan dibuatkan object action otomatis dari sini
export const { deposit, withdraw } = walletSlice.actions;

// Selector bisa dibuat di sini, atau dibuat di tempat akan dipanggil
// Agar lebih rapi dan reusable, dibuat di sini saja
export const selectBalance = state => state.wallet.balance;
export const selectUser = state => state.wallet.user;

export default walletSlice.reducer;