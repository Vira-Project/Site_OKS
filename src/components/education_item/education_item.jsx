import { RiFileInfoFill } from "react-icons/ri";

function EducationItem({ cover, title, description, url }) {
  return (
    <div className="education_item">
      <div className="education_item_cover">{cover}</div>
      <div className="education_item_title">
        <span>{title}</span>
      </div>
      <div className="education_item_description">
        <p>
          <br />- Силабус
          <br />- Лекції
          <br />- Практичні роботи
        </p>
        <p>
          <br />- Самостійна робота
          <br />- Контроль знань
        </p>
      </div>
      <div className="education_item_url">
        <a href={url}>
          <RiFileInfoFill />
        </a>
      </div>
    </div>
  );
}

export default EducationItem;
