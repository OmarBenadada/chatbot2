
from fastapi import FastAPI
from DB import myEngine
from sqlalchemy.orm import sessionmaker
from openai import AsyncOpenAI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv("apikey.env")

myApi=FastAPI()

myApi.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],)

mysecret_key=os.getenv("api_key")

mySession=sessionmaker(bind=myEngine)

class user_input(BaseModel):
    input:str

def Dbsession():
    usesession=mySession()
    try:
        yield usesession
    finally:
        usesession.close()

@myApi.post("/something")
async def Bridge_to_ai(sentence:user_input):

    async def fetching_responce():
        client = AsyncOpenAI(api_key=mysecret_key)

        stream =await client.chat.completions.create(
            model="gpt-5.4", 
            messages=[{"role": "user", "content": sentence.input}],
            temperature=0.7,
            stream=True, 
        )
        async for ele in stream:
            content=ele.choices[0].delta.content
            if content:
                yield content

    return StreamingResponse(fetching_responce(), media_type="text/plain")
