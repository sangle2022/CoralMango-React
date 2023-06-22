import React, { useEffect, useState } from "react";
import Table from "../components/table";
import "./homePage.css";
import NavBar from "../components/navbar";
import CardList from "../components/cardList";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [viewMode, setViewMode] = useState("table");
  const [data, setData] = useState(null);
  const toggleViewMode = () => {
    setViewMode(viewMode === "table" ? "card" : "table");
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm === "") {
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

  const getData = async () => {
    try {
      let response = await fetch("https://coralmango.com/api/react-test");
      let data = await response.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavBar />
      <h2 className="heading">Data View</h2>
      <div className="serch">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name"
        />
      </div>
      {isFiltered && (
        <div className="text">
          <p>You are viewing filtered results!</p>
        </div>
      )}
      <div className="view-toggle">
        <button onClick={toggleViewMode}>
          {viewMode === "table" ? "Switch to Card List" : "Switch to Table"}
        </button>
      </div>
      {viewMode === "table" ? (
        <Table data={isFiltered ? filteredData : data} />
      ) : (
        <CardList data={isFiltered ? filteredData : data} />
      )}
    </div>
  );
}

export default HomePage;
