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
  name: 'user',
  initialState: initialUsersState,
  reducers: {
    getUserList: (state, action) => {
      state.userList = action.payload;
    },
    addUsers: (state, action) => {
      state.userList = action.payload;
    },
    updateUsers: (state, action) => {
      state.userList = action.payload;
    },
    deleteUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});
export const { getUserList, updateUsers, deleteUserList } = usersSlice.actions;
export default usersSlice.reducer;
