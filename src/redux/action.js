import { SEND_NAME } from 'redux/actionTypes'

export const sendName = name => ({
  type: SEND_NAME,
  name: name
});