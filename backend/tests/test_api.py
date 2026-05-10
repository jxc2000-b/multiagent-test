from datetime import datetime

from app.main import health, message


def test_health_response() -> None:
    data = health().model_dump()
    assert data["status"] == "ok"
    assert data["service"] == "python-backend"
    assert datetime.fromisoformat(data["timestamp"])


def test_message_response() -> None:
    assert message().model_dump() == {"message": "Hello from the Python backend."}
