import React from "react";
import { Table } from "react-bootstrap";

const departments = ["druksys sells", "druksys financial", "support"];

const DepartmentDisplay = () => {
  return (
    <Table>
      <tbody>
        {departments.map((department, i) => {
          return (
            <tr key={i}>
              <td>{department}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default DepartmentDisplay;
