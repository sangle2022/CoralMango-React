// import React, { useState } from 'react';

// function Table({ data }) {
//   const [sortBy, setSortBy] = useState(null);

//   const handleSort = (property) => {
//     setSortBy(property);
//   };

//   const sortedData = sortBy
//     ? [...data].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
//     : data;

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th onClick={() => handleSort('name')}>Name</th>
//           <th onClick={() => handleSort('age')}>Age</th>
//           <th>Occupation</th>
//         </tr>
//       </thead>
//       <tbody>
//         {sortedData.map((item, index) => (
//           <tr key={index}>
//             <td>{item.name}</td>
//             <td>{item.age}</td>
//             <td>{item.occupation}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default Table;

import React, { useState } from 'react';
import './table.css';
function Table({ data }) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  
  const handleSort = (property) => {
    if (property === sortBy) {
      // If the same property is clicked again, toggle the sort order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // If a different property is clicked, set it as the new sort property in ascending order
      setSortBy(property);
      setSortOrder('asc');
    }
  };

  const sortedData = sortBy
    ? [...data].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return sortOrder === 'asc' ? -1 : 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
      })
    : data;

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>
            Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
          </th>
          <th onClick={() => handleSort('age')}>
            Age {sortBy === 'age' && (sortOrder === 'asc' ? '▲' : '▼')}
          </th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
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

