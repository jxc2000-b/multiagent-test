## Multiagent Test App

Simple full-stack app with a Python FastAPI backend and a React frontend.

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The backend exposes:

- `GET /api/health`
- `GET /api/message`

Run backend tests with:

```bash
cd backend
pip install -r requirements-dev.txt
python -m pytest
```

### Frontend

```bash
cd react-app
npm install
npm run dev
```

Open the Vite URL, usually `http://localhost:5173`. The frontend proxies `/api`
requests to the backend at `http://127.0.0.1:8000`.
