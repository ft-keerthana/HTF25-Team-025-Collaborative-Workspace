from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_teams():
    return {"teams": [
      {"name": "Alice"}, {"name": "Bob"}, {"name": "Charlie"}
    ]}
