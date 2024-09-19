import { MOREDOT } from "../../assets/icon";
import { color_priorities_map } from "../../utils/const";
import "./Card.css";

export default function Card({ id, title, tag, priority }) {
  return (
    <>
      <div className={`card-container ${color_priorities_map[priority]}`}>
        <h3 className="card-id">{id}</h3>
        <h4 className="card-title">{title}</h4>
        {(tag ?? []).map((elem, index) => (
          <div key={index} className="tag-container">
            <button className="tag-more">
              <img src={MOREDOT} alt="3 dots" />
            </button>
            <div className="tag-name">{elem}</div>
          </div>
        ))}
      </div>
    </>
  );
}
