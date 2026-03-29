from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_events():
    return {"events": [
        {"title": "Sprint Planning", "date": "2025-10-26"},
        {"title": "Design Review", "date": "2025-10-27"},
        {"title": "Alpha Release Deadline", "date": "2025-10-29"}
    ]}
