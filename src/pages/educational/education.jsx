import "./education.scss";

// ICONS
// web
import { SiWebflow } from "react-icons/si";
// information
import { IoInformationOutline } from "react-icons/io5";
// algoritm
import { SiAlgorand } from "react-icons/si";
// os
import { GrSystem } from "react-icons/gr";

// COMPONENTS
import EducationItem from "../../components/education_item/education_item";

function Education() {
  return (
    <div className="education">
      <div className="education_container">
        <div className="education_block">
          <div className="education_block_container">
            <EducationItem
              cover={<SiWebflow />}
              title={"Web-технології та web-дизайн"}
              description={
                "- Силабус\n-Лекції\n-Практичні/лабораторні роботи\n-Самостійна робота\n-Контроль знань"
              }
              url={"https://youtube.com"}
            />
            <EducationItem
              cover={<GrSystem />}
              title={"Операційні системи"}
              description={
                "Методичні вказівки до практичних занять для здобувачів освітньо-кваліфікаційного рівня молодший спеціаліст ІV курсу спеціальності Комп’ютерні науки"
              }
              url={"https://youtube.com"}
            />
            <EducationItem
              cover={<IoInformationOutline />}
              title={"Інформатика"}
              description={
                "Завдання для поточного контролю знань Комплексна контрольна робота Питання до заліку"
              }
              url={"https://youtube.com"}
            />
            <EducationItem
              cover={<SiAlgorand />}
              title={"Алгоритми та структури даних"}
              description={
                "Завдання для поточного контролю знань Комплексна контрольна робота Питання до заліку"
              }
              url={"https://youtube.com"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
