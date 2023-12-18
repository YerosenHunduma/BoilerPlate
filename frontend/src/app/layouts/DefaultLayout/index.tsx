import DefaultLayoutComponent from 'app/components/DefaultLayout';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useDefaultLayoutSlice } from './slice';
import { selectIsAuthenticatingUser, selectUser } from './slice/selectors';
import { DefaultLayoutProps } from './types';

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;
  const { actions } = useDefaultLayoutSlice();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const isAuthenticatingUser = useSelector(selectIsAuthenticatingUser);

  React.useEffect(() => {
    dispatch(actions.authenticateUser());
  }, []);

  return (
    <DefaultLayoutComponent
      isAuthenticatingUser={isAuthenticatingUser}
      user={user}
    >
      {children}
    </DefaultLayoutComponent>
  );
};
