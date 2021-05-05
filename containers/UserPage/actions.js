import { ActionTypes } from './constant'

export const setUser = (user) => ({
  type: ActionTypes.SET_USER,
  payload: user,
});