from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_dashboard_summary():
    return {"message": "Dashboard summary example"}
