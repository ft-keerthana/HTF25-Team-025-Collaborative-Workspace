from pydantic import BaseModel

class DashboardSummary(BaseModel):
    message: str
