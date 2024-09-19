import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import DataService from "./services/data";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState({});
  const [filterData, setFilterData] = useState({
    grouping:
      localStorage.getItem("grouping") !== null
        ? localStorage.getItem("grouping")
        : localStorage.setItem("grouping", "status") && "status",
    ordering:
      localStorage.getItem("ordering") !== null
        ? localStorage.getItem("ordering")
        : localStorage.setItem("ordering", "priority") && "priority",
  });

  const fetchData = useCallback(async () => {
    setLoadingData(true);
    DataService.fetchData()
      .then((res) => setTasks(res))
      .catch((err) => setError("Error Fetching Data"))
      .finally(() => setLoadingData(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const setFilters = (key, value) => {
    localStorage.setItem(key, value);
    setFilterData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  if (loadingData) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }
  if (error !== "") {
    return <p>{error}</p>;
  }

  return (
    <>
      <Navbar filter={filterData} setFilter={setFilters} />
      <Home data={tasks ?? {}} filter={filterData} />
    </>
  );
}

export default App;
