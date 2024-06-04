import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="IMG-3854.jpg" alt="Tetiana Paniot" />;
}

function Intro() {
  return (
    <div>
      <h1>Tetiana Paniot</h1>
      <p>
        Web developer trainee who loves coding and passionate about good design
        and product solutions. Apart from learning web development and parenting
        I go for sports, play intellectual games and read books.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML5/CSS3" emoji="💪" color="red" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="React" emoji="💪" color="lightblue" />
      <Skill skill="Git and GitHub" emoji="💪" color="grey" />
      <Skill skill="API" emoji="💪" color="orange" />
      <Skill skill="AJAX" emoji="💪" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
