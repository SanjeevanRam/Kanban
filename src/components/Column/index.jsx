import { ADD, MOREDOT } from "../../assets/icon";
import Card from "../Card";
import "./Column.css";

export default function Column({
  title,
  card_data,
  img_src,
  grouping,
  filter,
  ordering,
}) {
  ordering === "priority"
    ? card_data.sort((a, b) => a.priority - b.priority)
    : card_data.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });

  return (
    <>
      <div className="column">
        <div className="column-header">
          <div className="header-title">
            <img src={img_src} alt={filter === "user" ? "" : title} />
            <h1 className="column-title">{title}</h1>
          </div>
          <div className="header-options">
            <img src={ADD} alt="add" />
            <img src={MOREDOT} alt="3 dot" />
          </div>
        </div>
        <div className="column-content">
          {(card_data ?? []).map((elem, index) => {
            if (elem[filter === "user" ? "userId" : filter] === grouping)
              return (
                <Card
                  key={index}
                  title={elem.title ?? ""}
                  id={elem.id ?? ""}
                  tag={elem.tag ?? []}
                  priority={elem.priority ?? 0}
                />
              );
            return null;
          })}
        </div>
      </div>
    </>
  );
}
