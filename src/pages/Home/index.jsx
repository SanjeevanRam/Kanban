import Column from "../../components/Column";
import useGrouping from "../../hooks/useGrouping";
import { icon_map, priorities_map } from "../../utils/const";
import "./Home.css"


export default function Home({ data, filter }) {
  const groupedData = useGrouping(data, filter.ordering);

  return (
    <div className="column-wraper">
      {groupedData[filter.grouping].map((el, index) => {
        if (filter.grouping === "status"){
          return (
            <Column
              img_src={icon_map[el]}
              key={index}
              filter={filter.grouping}
              title={el}
              grouping={el}
              ordering={filter.ordering}
              card_data={data.tickets}
            />
          );
        }
        else if (filter.grouping === "priority"){
          return (
            <Column
              img_src={icon_map[el]}
              key={index}
              filter={filter.grouping}
              title={priorities_map[el]}
              grouping={el}
              ordering={filter.ordering}
              card_data={data.tickets}
            />
          );
        }
        else if (filter.grouping === "user"){
          return (
            <Column
              key={index}
              filter={filter.grouping}
              title={groupedData.userNameList[index]}
              grouping={el}
              ordering={filter.ordering}
              card_data={data.tickets}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
