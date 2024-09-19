import { useState } from "react";

export default function useFilterData() {
const [filterData, setFilterData] = useState({
    grouping: localStorage.getItem("grouping") !== null ? localStorage.getItem("grouping") : localStorage.setItem("grouping","status") && "status",
    ordering: localStorage.getItem("ordering") !== null ? localStorage.getItem("ordering") : localStorage.setItem("ordering","priority") && "priority"
})
  const setFilter = (key, value) => {
    setFilterData(prev => {
        return {...prev, [key]: value}
    })
    localStorage.setItem(key, value)
  };

  return { ...filterData, setFilter};
}
