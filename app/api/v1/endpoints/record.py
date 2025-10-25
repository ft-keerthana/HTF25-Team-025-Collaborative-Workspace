from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_reports():
    return {"reports": [
        {"title": "Weekly Status Report"},
        {"title": "AI-Generated Report"}
    ]}
