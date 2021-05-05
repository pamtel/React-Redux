import { ActionTypes } from './constant'

export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
});
