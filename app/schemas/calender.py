from pydantic import BaseModel

class Event(BaseModel):
    title: str
    date: str
