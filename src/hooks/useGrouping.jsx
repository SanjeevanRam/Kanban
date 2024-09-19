import { useEffect, useState } from "react";

export default function useGrouping(data) {
  const [groupedData, setGroupedData] = useState({
    status: [],
    user: [],
    priority: [],
    userNameList: [],
  });
  useEffect(() => {
    const grouping = {
      status: new Set(),
      user: new Set(),
      priority: new Set(),
    };

    data.tickets.forEach((elem) => {
      grouping.status.add(elem.status ?? "");
      grouping.user.add(elem.userId ?? "");
      grouping.priority.add(elem.priority ?? 0);
    });
    setGroupedData({
      priority: Array.from(grouping.priority).sort().reverse(),
      status: Array.from(grouping.status),
      user: Array.from(grouping.user).sort(),
      userNameList: data.users.map((elem) => elem.name),

    });
  }, [data]);
  return groupedData;
}
