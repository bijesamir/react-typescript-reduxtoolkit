import { createAsyncThunk } from '@reduxjs/toolkit';

const mockData = [
  {
    name: 'samir',
    address: 'japan',
  },
  {
    name: 'ram',
    address: 'nepal',
  },
  {
    name: 'sita',
    address: 'india',
  },
  {
    name: 'gopal',
    address: 'japan',
  },
  {
    name: 'kiran',
    address: 'japan',
  },
];

export const getUserList = createAsyncThunk('/', async () => {
  return mockData;
});
export const addUserList = createAsyncThunk('/', async (newUserList) => {
  return newUserList;
});
export const updateUserList = createAsyncThunk('/', async (newUserList) => {
  return newUserList;
});

export const deleteUserList = createAsyncThunk('/', async (newUserList) => {
  return newUserList;
});
