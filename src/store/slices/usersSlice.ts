import { createSlice } from '@reduxjs/toolkit';

interface UsersState {
  name: string;
  address: string;
}

interface UsersStateProps {
  userList: UsersState[];
}

export const initialUsersState: UsersStateProps = {
  userList: [],
};

export const usersSlice = createSlice({
  name: 'loading',
  initialState: initialUsersState,
  reducers: {
    updateUsers: (state, action) => {
      state.userList = action.payload;
    },
  },
});
export const { updateUsers } = usersSlice.actions;
export default usersSlice.reducer;
