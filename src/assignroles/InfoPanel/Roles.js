import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { deepClone } from "./deepClone.js";

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
  return (
    <Table>
      <tbody>
        {roles.map((role, i) => {
          return (
            <tr key={i}>
              <td>{roles[i].name}</td>
              <td>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      defaultChecked={role.toggled}
                      onChange={() => {
                        setRoles(() => {
                          const newState = deepClone(roles);
                          newState[i].toggled = !newState[i].toggled;
                          return newState;
                        });
                      }}
                    />
                    <span className="slider round"></span>
                  </label>
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
