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

const copy = o => {
  let output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
    v = o[key];
    output[key] = typeof v === "object" ? copy(v) : v;
  }
  return output;
};

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
                        setRoles(prevState => {
                          const newState = copy(roles);
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

// {
//   roles.map((role, i) => {
//     return (
//       <tr>
//         <td>{role.name}</td>
//         <td>
//           <div className="custom-control custom-switch">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customSwitches"
//               checked={role.toggled}
//               onChange={() => {
//                 setRoles(prevRoles => {
//                   const newRoles = prevRoles.slice();
//                   console.log("prevRoles", newRoles[i]);
//                   newRoles[i].toggled = !newRoles[i].toggled;
//                   console.log("prevRoles", newRoles[i]);
//                   return newRoles;
//                 });
//               }}
//             />
//             <label
//               className="custom-control-label"
//               htmlFor="customSwitches"
//             ></label>
//           </div>
//         </td>
//       </tr>
//     );
//   });
// }
