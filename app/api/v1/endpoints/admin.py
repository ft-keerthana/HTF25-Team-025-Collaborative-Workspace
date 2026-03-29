from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_admin_status():
    return {"status": "Admin dashboard is operational"}
