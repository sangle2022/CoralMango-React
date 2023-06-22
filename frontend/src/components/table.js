import React, { useState } from "react";
import "./table.css";
function Table({ data }) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (property) => {
    if (property === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(property);
      setSortOrder("asc");
    }
  };

  const sortedData = sortBy
    ? [...data].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      })
    : data;

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>
            Name {sortBy === "name" && (sortOrder === "asc" ? "▲" : "▼")}
          </th>
          <th onClick={() => handleSort("age")}>
            Age {sortBy === "age" && (sortOrder === "asc" ? "▲" : "▼")}
          </th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        {sortedData &&
          sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
