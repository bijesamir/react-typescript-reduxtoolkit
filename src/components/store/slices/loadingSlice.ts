import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  blocking?: boolean;
  updateTime?: Date;
  apiLoadingState: Record<string, boolean>;
  isLoading?: boolean;
}

export const initialLoadingState: LoadingState = {
  blocking: false,
  updateTime: new Date(),
  apiLoadingState: {},
  isLoading: true,
};

const getLoadingStatus = (api: Record<string, boolean>) => {
  return Object.values(api).find((loading: boolean) => loading) || false;
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialLoadingState,
  reducers: {},
});

export default loadingSlice.reducer;
