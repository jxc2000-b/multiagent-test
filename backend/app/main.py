from datetime import datetime, timezone

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI(title="Multiagent Test API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class StatusResponse(BaseModel):
    status: str
    service: str
    timestamp: str


class MessageResponse(BaseModel):
    message: str


@app.get("/api/health", response_model=StatusResponse)
def health() -> StatusResponse:
    return StatusResponse(
        status="ok",
        service="python-backend",
        timestamp=datetime.now(timezone.utc).isoformat(),
    )


@app.get("/api/message", response_model=MessageResponse)
def message() -> MessageResponse:
    return MessageResponse(message="Hello from the Python backend.")
