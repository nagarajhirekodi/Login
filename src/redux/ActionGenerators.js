import * as Actions from "./Actions";

export const loginData = (data) => (dispatch) => {
  dispatch(Actions.login(data));
};
