import "./App.css";

const features = [
  { title: "Multi-Agent", desc: "Orchestrate independent AI agents working in parallel across isolated worktrees." },
  { title: "Branch Isolation", desc: "Each agent operates on its own git branch with zero conflicts." },
  { title: "Merge & Review", desc: "Pull, inspect for redundancy, and merge changes with confidence." },
];

function App() {
  return (
    <>
      <header className="hero">
        <h1>MultiAgent Test</h1>
        <p className="subtitle">
          Scaffolded by a Hermes agent. Built with Vite + React.
        </p>
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
        <p>hermes-agent branch &middot; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;
