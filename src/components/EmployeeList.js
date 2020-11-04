import React from "react";
import { connect } from "react-redux";

function EmployeeList(props) {
  const { employeelist } = props;
  return (
    <table
      style={{ width: "100%", marginTop: 20 }}
      className="offset-md-2 col-md-8"
    >
      <thead>
        <tr style={{ border: "1px solid" }}>
          <td style={{ padding: 10 }}>ID</td>
          <td style={{ padding: 10 }}>Name</td>
          <td style={{ padding: 10 }}>Age</td>
          <td style={{ padding: 10 }}>Gender</td>
          <td style={{ padding: 10 }}>Email</td>
          <td style={{ padding: 10 }}>Phone Number</td>
        </tr>
      </thead>
      <tbody>
        {employeelist.map((emp) => (
          <tr key={emp.id} style={{ border: "1px solid" }}>
            <td style={{ padding: 10 }}>{emp.id}</td>
            <td style={{ padding: 10 }}>{emp.name}</td>
            <td style={{ padding: 10 }}>{emp.age}</td>
            <td style={{ padding: 10 }}>{emp.gender}</td>
            <td style={{ padding: 10 }}>{emp.email}</td>
            <td style={{ padding: 10 }}>{emp.phoneNo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  employeelist: state.employeelist,
});

export default connect(mapStateToProps, null)(EmployeeList);
