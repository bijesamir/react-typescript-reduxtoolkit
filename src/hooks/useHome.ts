import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updateUsers } from '../store/slices/usersSlice';

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

const useHome = () => {
  const { usersList } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateUsers(mockData));
  }, []);

  return {
    mockData,
    usersList,
  };
};

export default useHome;
