import {configureStore, combineReducers} from '@reduxjs/toolkit';

import accountSlice from '@Store/Reducers/accountSlice';

const combinedReducer = combineReducers({
  account: accountSlice,
});

const store = configureStore({
  reducer: combinedReducer,
});

export {store};
export type IRootState = ReturnType<typeof store.getState>;
