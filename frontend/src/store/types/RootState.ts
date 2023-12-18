import { DefaultLayoutState } from 'app/layouts/DefaultLayout/slice/types';
// [IMPORT NEW CONTAINER STATE ABOVE] < Needed for generating containers seamlessly

export interface RootState {
  defaultLayout?: DefaultLayoutState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
