import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  const [apiState, setApiState] = useState({
    loading: true,
    health: null,
    message: '',
    error: '',
  });

  useEffect(() => {
    async function loadBackendState() {
      try {
        const [healthResponse, messageResponse] = await Promise.all([
          fetch('/api/health'),
          fetch('/api/message'),
        ]);

        if (!healthResponse.ok || !messageResponse.ok) {
          throw new Error('Backend returned an unexpected response.');
        }

        const [health, message] = await Promise.all([
          healthResponse.json(),
          messageResponse.json(),
        ]);

        setApiState({
          loading: false,
          health,
          message: message.message,
          error: '',
        });
      } catch (error) {
        setApiState({
          loading: false,
          health: null,
          message: '',
          error: error instanceof Error ? error.message : 'Unable to reach backend.',
        });
      }
    }

    loadBackendState();
  }, []);

  return (
    <main className="shell">
      <section className="panel">
        <p className="eyebrow">React + Python</p>
        <h1>Connected full-stack test app</h1>
        <p className="summary">
          The React frontend calls the FastAPI backend through Vite's local proxy.
        </p>

        <div className="statusBox" aria-live="polite">
          {apiState.loading && <p>Checking backend connection...</p>}

          {!apiState.loading && apiState.error && (
            <p className="error">Backend unavailable: {apiState.error}</p>
          )}

          {!apiState.loading && !apiState.error && (
            <>
              <p className="message">{apiState.message}</p>
              <dl>
                <div>
                  <dt>Status</dt>
                  <dd>{apiState.health.status}</dd>
                </div>
                <div>
                  <dt>Service</dt>
                  <dd>{apiState.health.service}</dd>
                </div>
                <div>
                  <dt>Time</dt>
                  <dd>{new Date(apiState.health.timestamp).toLocaleString()}</dd>
                </div>
              </dl>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
