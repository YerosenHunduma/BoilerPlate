export interface IRoute {
  path: string;
  exact: boolean;
  isAuthenticated?: boolean;
  element: JSX.Element;
}
