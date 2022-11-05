import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IAccountSlice {
  username: string;
  token: string;
  userId: string;
}

const initialState: IAccountSlice = {
  username: '',
  token: '',
  userId: '',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<IAccountSlice>) => {
      state.username = action.payload.username;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
    resetAccount: state => {
      state.username = '';
      state.userId = '';
      state.token = '';
    },
  },
});

export const {setAccount, resetAccount} = accountSlice.actions;
export default accountSlice.reducer;
