from fastapi import FastAPI
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import dotenv
# from .config import settings
dotenv.load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=dotenv.AllowedOrigins.split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def check_system():
 return {"message": "System is working!"}

