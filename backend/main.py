import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


class SuccessResponse(BaseModel):
    message: str
    status: str = "success"


class ErrorResponse(BaseModel):
    message: str
    status: str = "error"


@app.get(
    "/",
    response_model=SuccessResponse,
    responses={
        200: {"description": "Successful response", "model": SuccessResponse},
        500: {"description": "Internal server error", "model": ErrorResponse},
    },
)
async def root():
    try:
        return SuccessResponse(message="Hello from FastAPI!")
    except Exception:
        raise HTTPException(status_code=500, detail="Internal server error occurred")


def main():
    uvicorn.run(app, host="localhost", port=9000)


if __name__ == "__main__":
    main()
