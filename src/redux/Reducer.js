import login from "../utils/login.json";
import employeeList from "../utils/employeeList.json";

const initialState = {
  userName: login.username,
  password: login.password,
  employeelist: employeeList.user,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userName: action.payload.userName,
        password: action.payload.password,
      };

    default:
      return state;
  }
};

export default authReducer;
