import { SessionsState } from './types';

export const initialSessionsState: SessionsState = {
  fetching: false,
  fetchingError: null,
  list: [],
  obj: {},
};
