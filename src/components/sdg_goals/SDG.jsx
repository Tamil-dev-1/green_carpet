import "./SDGgoal.css";

const sdgs = [
  { id: 1, title: "No Poverty", color: "#E5243B" },
  { id: 2, title: "Zero Hunger", color: "#DDA63A" },
  { id: 3, title: "Good Health", color: "#4C9F38" },
  { id: 4, title: "Quality Education", color: "#C5192D" },
  { id: 5, title: "Gender Equality", color: "#FF3A21" },
  { id: 6, title: "Clean Water", color: "#26BDE2" },
  { id: 7, title: "Affordable Energy", color: "#FCC30B" },
  { id: 8, title: "Decent Work", color: "#A21942" },
  { id: 9, title: "Industry & Innovation", color: "#FD6925" },
  { id: 10, title: "Reduced Inequalities", color: "#DD1367" },
  { id: 11, title: "Sustainable Cities", color: "#FD9D24" },
  { id: 12, title: "Responsible Consumption", color: "#BF8B2E" },
  { id: 13, title: "Climate Action", color: "#3F7E44" },
  { id: 14, title: "Life Below Water", color: "#0A97D9" },
  { id: 15, title: "Life on Land", color: "#56C02B" },
  { id: 16, title: "Peace & Justice", color: "#00689D" },
  { id: 17, title: "Partnerships", color: "#19486A" },
];

function SDGSection() {
  return (
    <section className="goal-section">
      <div className="container">

        <div className="text-center goal-header">
          <span className="goal-subtitle">
            SDG ALIGNMENT
          </span>

          <h2 className="goal-heading">
            Sustainable <span style={{color:"#01AB1A"}}>
              Development Goals
            </span>
          </h2>

          <p className="goal-description">
            Our programs align with the United Nations Sustainable
            Development Goals to create measurable global impact.
          </p>
        </div>

        <div className="goal-grid">
          {sdgs.map((goal) => (
            <div
              key={goal.id}
              className="goal-card"
              style={{ backgroundColor: goal.color }}
            >
              <span className="goal-number">
                {goal.id}
              </span>

              <div className="goal-overlay">
                <span>{goal.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SDGSection;