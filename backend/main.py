from fastapi import FastAPI
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import dotenv, os
from fastapi import HTTPException
from model import LoginRequest
# from .config import settings
dotenv.load_dotenv()
app = FastAPI()
allowed_origins_str = os.environ.get("ALLOWED_ORIGINS", "")
origins = allowed_origins_str.split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def check_system():
 return {"message": "System is working!"}

@app.post("/login")
async def login(credentials: LoginRequest):
 if credentials.username == "admin" and credentials.password == "1234":
        return {"user": {"username": "admin", "token": "fake-jwt-token"}}
    
 raise HTTPException(status_code=401, detail="Invalid credentials")