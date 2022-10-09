import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

type User = {
  uid: string;
  displayName: string;
  photoUrl: string;
};

const initialState: User = {
  uid: '',
  photoUrl: '',
  displayName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
      console.log(state, action);
    },
    logout: (state) => {
      state = { uid: '', photoUrl: '', displayName: '' };
    },
    updateUserProfile: (state, action: PayloadAction<User>) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.photoUrl = action.payload.photoUrl;
    },
  },
});

export const { login, logout, updateUserProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
