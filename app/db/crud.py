from sqlalchemy.orm import Session
from app.db import models

def get_users(db: Session):
    return db.query(models.User).all()

def get_documents(db: Session):
    return db.query(models.Document).all()
