import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML5&CSS3",
    level: "advanced",
    color: "#F5564E",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#90eebf",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#FAE355",
  },
  {
    skill: "React JS",
    level: "beginner",
    color: "#ADD8E6",
  },
  {
    skill: "Git & GitHub",
    level: "advanced",
    color: "#808080",
  },
  {
    skill: "API",
    level: "intermediate",
    color: "#FFA500",
  },
  {
    skill: "Ajax",
    level: "beginner",
    color: "#800080",
  },
];

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
      <div>
        {skills.map((skill) => (
          <Skill skill={skill.skill} level={skill.level} color={skill.color} />
        ))}
      </div>
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
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
