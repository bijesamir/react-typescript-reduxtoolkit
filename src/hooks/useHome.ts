import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getUserList } from '../store/services/userApiServices';

const useHome = () => {
  const usersList = useAppSelector((state) => state.usersList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return {
    usersList,
  };
};

export default useHome;
