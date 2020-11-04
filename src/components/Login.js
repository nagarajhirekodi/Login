import React from "react";
import { connect } from "react-redux";

function Login(props) {
  const [state, setState] = React.useState({
    userName: "",
    password: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value, message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      props.userName === state.userName &&
      props.password === state.password
    ) {
      props.history.push("/employeeList");
      setState({ ...state, message: "" });
    } else {
      setState({ ...state, message: "Please enter valid credentials" });
    }
  };

  return (
    <form className="offset-md-4 col-md-4 pt-5">
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          name="userName"
          type="text"
          className="form-control"
          value={state.userName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          value={state.password}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSubmit}
        style={{ width: 150 }}
        disabled={!state.userName || !state.password}
      >
        Login
      </button>

      {state.message ? (
        <div className="text text-danger"> {state.message}</div>
      ) : (
        ""
      )}
    </form>
  );
}

const mapStateToProps = (state) => ({
  userName: state.userName,
  password: state.password,
});

export default connect(mapStateToProps, null)(Login);
