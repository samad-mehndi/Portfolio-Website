from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello from backend!"}

@app.get("/projects")
def get_projects():
    return [
        {"title": "AI Resource Allocation", "description": "An ML model to optimize GPU usage"},
        {"title": "Mental Health Chatbot", "description": "An NLP-powered conversational chatbot"}
    ]
