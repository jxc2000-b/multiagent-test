import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const features = [
  { title: "Multi-Agent", desc: "Orchestrate independent AI agents working in parallel across isolated worktrees." },
  { title: "Branch Isolation", desc: "Each agent operates on its own git branch with zero conflicts." },
  { title: "Merge & Review", desc: "Pull, inspect for redundancy, and merge changes with confidence." },
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <header className="hero">
        <h1>MultiAgent Test</h1>
        <p className="subtitle">Signed in as {user.email}</p>
        <button className="logout-btn" onClick={handleLogout}>Sign out</button>
      </header>

      <section className="features">
        {features.map((f) => (
          <div className="card" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>MultiAgent Demo &middot; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
