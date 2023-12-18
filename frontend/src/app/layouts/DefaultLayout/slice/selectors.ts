import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.defaultLayout || initialState;

export const selectDefaultLayout = createSelector(
  [selectSlice],
  state => state,
);

export const selectUser = createSelector([selectSlice], state => state.user);

export const selectIsAuthenticatingUser = createSelector(
  [selectSlice],
  state => state.isAuthenticatingUser,
);

export const selectRedirectTo = createSelector(
  [selectSlice],
  state => state.redirectTo,
);
