from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_documents():
    return {"documents": [
        {"title": "Project Proposal V2", "owner": "Alice"},
        {"title": "API Design Guidelines", "owner": "Bob"}
    ]}
