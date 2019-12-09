import React, { useState } from "react";
import { Table } from "react-bootstrap";

const mockRoles = [
  {
    name: "departmentAdmin",
    toggled: true
  },
  {
    name: "Assistant",
    toggled: false
  },
  {
    name: "evaluator",
    toggled: true
  }
];

const Roles = () => {
  const [roles, setRoles] = useState(mockRoles);
  console.log("roles", roles);
  return (
    <Table>
      <tbody>
        {roles.map((role, i) => {
          return (
            <tr>
              <td>{role.name}</td>
              <td>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitches"
                    checked={role.toggled}
                    onChange={() => {
                      setRoles(prevRoles => {
                        const newRoles = prevRoles.slice();
                        console.log("prevRoles", newRoles[i]);
                        newRoles[i].toggled = !newRoles[i].toggled;
                        console.log("prevRoles", newRoles[i]);
                        return newRoles;
                      });
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitches"
                  ></label>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Roles;
