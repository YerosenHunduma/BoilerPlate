import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'store/utils/toolkit';
import { useInjectReducer, useInjectSaga } from 'store/utils/redux-injectors';
import { defaultLayoutSaga } from './saga';
import { DefaultLayoutState, IRedirectAction } from './types';
import { IUserModel } from 'app/models/user';

export const initialState: DefaultLayoutState = {
  isAuthenticatingUser: false,
  user: undefined,
  redirectTo: {
    path: null,
  },
};

const slice = createSlice({
  name: 'defaultLayout',
  initialState,
  reducers: {
    authenticateUser(state) {
      state.isAuthenticatingUser = true;
    },
    setIsAuthenticating(state, action: PayloadAction<boolean>) {
      state.isAuthenticatingUser = action.payload;
    },
    setUser(state, action: PayloadAction<IUserModel>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = undefined;
    },
    setRedirectTo(state, action: PayloadAction<IRedirectAction>) {
      state.redirectTo = action.payload;
    },
    clearRedirectTo(state) {
      state.redirectTo = {
        path: null,
      };
    },
  },
});

export const { actions: defaultLayoutActions } = slice;

export const useDefaultLayoutSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: defaultLayoutSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 * const { actions } = useDefaultLayoutSlice();
 *
 * const onButtonClick = (evt) => {
 * dispatch(actions.someAction());
 * };
 * }
 */
