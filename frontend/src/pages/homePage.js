import React, { useState } from 'react';
import Table from '../components/table';
import "./homePage.css"
const data = [
  {
    name: 'John Doe',
    age: 32,
    occupation: 'Developer',
  },
  {
    name: 'Jane Doe',
    age: 27,
    occupation: 'Designer',
  },
  {
    name: 'Bob Smith',
    age: 45,
    occupation: 'Manager',
  },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm === '') {
      setFilteredData([]);
      setIsFiltered(false);
    } else {
      const filteredResults = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredResults);
      setIsFiltered(true);
    }
  };

  return (
    <div>
      <h2 className='heading'>Table</h2>
      <input className='serch' type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by name" />
      {isFiltered && <p className='text'>Viewing filtered results.</p>}
      <Table data={isFiltered ? filteredData : data} />
    </div>
  );
}

export default HomePage;
