import { IUserModel } from 'app/models/user';

export interface DefaultLayoutComponentProps {
  children: React.ReactNode;
  user?: IUserModel;
  isAuthenticatingUser: boolean;
}
