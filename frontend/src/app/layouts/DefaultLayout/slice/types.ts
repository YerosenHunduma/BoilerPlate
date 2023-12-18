/* --- STATE --- */

import { IUserModel } from 'app/models/user';

export interface IRedirectAction {
  path: string | null;
  param?: string;
}
export interface DefaultLayoutState {
  redirectTo: IRedirectAction;
  user?: IUserModel;
  isAuthenticatingUser: boolean;
}
